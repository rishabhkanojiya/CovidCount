import React, { Component } from "react";

export class TotalCt extends Component {
  renderValue = data => {
    if (!data.cvMainData) {
      return null;
    }
    const {
      state,
      confirmed,
      active,
      recovered,
      deaths
    } = data.cvMainData.StateData[0];

    return (
      <tbody>
        <tr>
          <td>
            <h5>{state}</h5>
          </td>
          <td className="blue lighten-5">
            <h5>{confirmed}</h5>
          </td>
          <td className="orange lighten-5">
            <h5>{active}</h5>
          </td>
          <td className="green lighten-5">
            <h5>{recovered}</h5>
          </td>
          <td className="red lighten-5">
            <h5>{deaths}</h5>
          </td>
        </tr>
      </tbody>
    );
  };
  render() {
    if (this.props.data.loading) return <div></div>;
    return (
      <div>
        <div className="row">
          <div className="col s12 m6">
            <h3>INDIA COVID-19 TRACKER</h3>
          </div>
          <div className="col s12 m12"></div>
        </div>
        <table className="centered ">
          <thead>
            <tr>
              <th></th>
              <th>CONFIRMED</th>
              <th>ACTIVE</th>
              <th>RECOVERED</th>
              <th>DEATHS</th>
            </tr>
          </thead>
          {this.renderValue(this.props.data)}
        </table>
      </div>
    );
  }
}

export default TotalCt;
