const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt
} = require("graphql");

const districtDataType = new GraphQLObjectType({
  name: "districtDataType",
  fields: () => ({
    district: { type: GraphQLString },
    confirmed: { type: GraphQLInt }
  })
});

const stateSplitDataType = new GraphQLObjectType({
  name: "stateSplitDataType",
  fields: () => ({
    districtData: {
      type: new GraphQLList(districtDataType),
      args: { state: { type: GraphQLString } },
      resolve(parentValue, { state }) {
        return Object.keys(parentValue[state].districtData).map(key => {
          return {
            district: key,
            confirmed: parentValue[state].districtData[key].confirmed
          };
        });
      }
    }
  })
});

module.exports = stateSplitDataType;
