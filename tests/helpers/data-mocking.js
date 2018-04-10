import {
  makeExecutableSchema,
  addMockFunctionsToSchema
} from 'graphql-tools';
import typeDefs from './schema';
import { graphql } from 'graphql';

// Custom GraphQL type resolver
const resolvers = {
  URI: {
    __parseValue (value) {
      return value;
    },
    __parseLiteral (value) {
      return value;
    },
    __serialize(value) {
      return value;
    }
  },
  Actor: {
    __resolveType(data) {
      // Explicitly resolve the type of any interface type based on the
      // special attribute __typename, which should be provided in mocks of
      // these types. Otherwise fallback to the data.typename.name, which
      // comes from built-in mocks.
      return data.__typename || data.typename.name;
    }
  }
};

// Create a schema which we can query from with our typedefs & resolvers
const schema = makeExecutableSchema({ typeDefs, resolvers });

// Add mocks, modifies schema in place
addMockFunctionsToSchema({
  schema,
  mocks: {
    URI: () => 'http://fakeurl.com',
    Repository: () => ({
      name: 'bigtest'
    }),
    PullRequest: () => ({
      title: "Foo Title",
      bodyText: "lorem",
      author: {
        login: "MyFakeUser",
        __typename: "User"
      }
    })
  },
  preserveResolvers: true
});



/**
 * Intercept the API end points our application talks to during
 * testing.
 *
 * This allows us to return whatever we want from XHR requests.
 *
 * @function
 */
function pretenderRoutes() {
  this.post(`https://api.github.com/graphql`, function(request) {
    let JSONRequest = JSON.parse(request.requestBody);
    let query = `query ${JSONRequest.query}`;
    let variables = JSONRequest.variables;

    return graphql(schema, query, {}, {}, variables).then((response) => {
      return [
        200,
        { 'content-type': 'application/graphql' },
        JSON.stringify(response)
      ];
    });
  });
}

export default pretenderRoutes;
