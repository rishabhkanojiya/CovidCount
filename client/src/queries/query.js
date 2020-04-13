import gql from "graphql-tag";

export const query = gql`
  {
    cvMainData {
      StateData {
        active
        state
        deaths
        confirmed
        recovered
      }
      TimeData {
        date
        dailyconfirmed
        dailyrecovered
        dailydeceased
      }
    }
  }
`;

export const distQuery = gql`
  query cvStateSpData($state: String) {
    cvStateSpData {
      districtData(state: $state) {
        district
        confirmed
      }
    }
  }
`;
