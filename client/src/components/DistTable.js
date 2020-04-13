import React, { Component } from "react";
import { graphql } from "react-apollo";
import { distQuery } from "../queries/query";

export class DistTable extends Component {
  renderTable = data => {
    if (data && !data.loading) {
      return data.cvStateSpData.districtData.map(({ district, confirmed }) => {
        return (
          <tr key={district}>
            <td>{district}</td>
            <td>{confirmed}</td>
          </tr>
        );
      });
    }
    return <tr></tr>;
  };

  render() {
    return (
      <div>
        <table className=" striped centered responsive-table">
          <thead>
            <tr>
              <th>DISTRICT</th>
              <th>CONFIRMED</th>
            </tr>
          </thead>
          <tbody>{this.renderTable(this.props.data)}</tbody>
        </table>
      </div>
    );
  }
}

export default graphql(distQuery, {
  options: props => ({ variables: { state: props.state.state } })
})(DistTable);
