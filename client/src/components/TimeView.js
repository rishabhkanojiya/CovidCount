import React, { Component } from "react";
import TimeChart from "./TimeChart";

export class TimeView extends Component {
  dataWrangle = (data, date) => {
    return data.map(a => {
      return a[date];
    });
  };
  render() {
    if (!this.props.data) {
      return null;
    }
    const data = this.props.data.TimeData;

    return (
      <div>
        <TimeChart
          labels={this.dataWrangle(data, "date")}
          data={this.dataWrangle(data, "dailyconfirmed")}
          title="dailyconfirmed"
          color="rgba(255, 159, 64, 1)"
        />
        <TimeChart
          labels={this.dataWrangle(data, "date")}
          data={this.dataWrangle(data, "dailyrecovered")}
          title="dailyrecovered"
          color="rgba(102, 187, 106, 1)"
        />
        <TimeChart
          labels={this.dataWrangle(data, "date")}
          data={this.dataWrangle(data, "dailydeceased")}
          title="dailydeceaseds"
          color="rgba(255, 99, 132, 1)"
        />
      </div>
    );
  }
}

export default TimeView;
