const { GraphQLObjectType, GraphQLString } = require("graphql");
const StatsType = require("./StatsType");
const stateSplitDataType = require("./CountryType");
const axios = require("axios");
const keys = require("../../config/keys");

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    cvMainData: {
      type: StatsType,
      resolve: async () => {
        const res = await axios.get(keys.urlData);
        return res.data;
      }
    },
    cvStateSpData: {
      type: stateSplitDataType,
      resolve: async () => {
        const res = await axios.get(keys.urlState);
        return res.data;
      }
    }
  })
});

module.exports = RootQueryType;
