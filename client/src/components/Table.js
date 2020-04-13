import React, { Component } from "react";
import Chart from "./Chart";
import TimeView from "./TimeView";
import DistTable from "./DistTable";

export class Table extends Component {
  state = {
    data: {},
    load: false,
    size: { chart: "m6", table: "m6" },
    height: 160
  };

  renderTable = data => {
    if (!data) {
      return <tr></tr>;
    }

    return data.StateData.map(
      ({ active, confirmed, deaths, recovered, state }) => {
        if (state === "Total") {
          return null;
        }
        return (
          <tr
            key={state}
            onClick={() => {
              this.setState({
                data: { active, confirmed, deaths, recovered, state },
                load: true,
                size: { chart: "m5", table: "m4" }
              });
            }}
          >
            <td>{state}</td>
            <td>{confirmed}</td>
            <td>{active}</td>
            <td>{recovered}</td>
            <td>{deaths}</td>
          </tr>
        );
      }
    );
  };

  renderDistTable = () => {
    if (this.state.load) {
      return (
        <div className="col s12 m3">
          <DistTable state={this.state.data} />
        </div>
      );
    }
  };
  renderChart = () => {
    if (this.state.load) {
      return (
        <div className="col s12 m5">
          <Chart height={this.state.height} data={this.state.data} />
        </div>
      );
    }
  };
  renderTimeChart = () => {
    return (
      <div
        className={`col s12 ${this.state.size.chart} `}
        style={{ float: "right" }}
      >
        <TimeView height={this.state.height} data={this.props.Querydata} />;
      </div>
    );
  };
  render() {
    return (
      <div>
        <div className={`col s12 ${this.state.size.table}`}>
          <table className=" highlight centered responsive-table">
            <thead>
              <tr>
                <th>STATE</th>
                <th>CONFIRMED</th>
                <th>ACTIVE</th>
                <th>RECOVERED</th>
                <th>DEATHS</th>
              </tr>
            </thead>
            <tbody>{this.renderTable(this.props.Querydata)}</tbody>
          </table>
        </div>
        {this.renderDistTable()}
        {this.renderChart()}
        {this.renderTimeChart()}
      </div>
    );
  }
}

export default Table;
