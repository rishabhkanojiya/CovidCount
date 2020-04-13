const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
  GraphQLSchema
} = require("graphql");

const stateDataType = new GraphQLObjectType({
  name: "StateDataType",
  fields: () => ({
    active: { type: GraphQLInt },
    confirmed: { type: GraphQLInt },
    deaths: { type: GraphQLInt },
    recovered: { type: GraphQLInt },
    state: { type: GraphQLString },
    statecode: { type: GraphQLString }
  })
});

const timeDataType = new GraphQLObjectType({
  name: "TimeDataType",
  fields: () => ({
    dailyconfirmed: { type: GraphQLInt },
    dailydeceased: { type: GraphQLInt },
    dailyrecovered: { type: GraphQLInt },
    totalconfirmed: { type: GraphQLInt },
    totaldeceased: { type: GraphQLInt },
    totalrecovered: { type: GraphQLInt },
    date: { type: GraphQLString }
  })
});

const StatsType = new GraphQLObjectType({
  name: "StatsDataType",
  fields: () => ({
    StateData: {
      type: new GraphQLList(stateDataType),
      resolve(parentValue, args) {
        return parentValue.statewise;
      }
    },
    TimeData: {
      type: new GraphQLList(timeDataType),
      resolve(parentValue, args) {
        return parentValue.cases_time_series;
      }
    }
  })
});

module.exports = StatsType;
