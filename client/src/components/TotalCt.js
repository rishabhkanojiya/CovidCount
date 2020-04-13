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
          <td>{state}</td>
          <td className="blue lighten-5">{confirmed}</td>
          <td className="orange lighten-5">{active}</td>
          <td className="green lighten-5">{recovered}</td>
          <td className="red lighten-5">{deaths}</td>
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
            <h4>INDIA COVID-19 TRACKER</h4>
          </div>
          <div className="col s12 m12"></div>
        </div>
        <div className="row">
          <table className="centered">
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
      </div>
    );
  }
}

export default TotalCt;
