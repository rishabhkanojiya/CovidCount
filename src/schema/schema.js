const { GraphQLSchema } = require("graphql");
const RootQueryType = require("./queries/rootQuery");

module.exports = new GraphQLSchema({
  query: RootQueryType
});
