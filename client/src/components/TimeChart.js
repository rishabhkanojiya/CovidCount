import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { isMobile } from "react-device-detect";

export class TimeChart extends Component {
  render() {
    const { labels, data, title, color } = this.props;

    const chartData = {
      labels: labels,
      datasets: [
        {
          label: title,
          data: data,
          backgroundColor: ["rgba(75, 192, 192, 0.2)"],
          pointRadius: 0,
          borderColor: color,
          borderWidth: 2,
          fill: false
        }
      ]
    };
    let height = 160;
    if (isMobile) {
      height = 280;
    }
    return (
      <div>
        <div className="row ">
          <div className="col s12 m12 ">
            <Line
              data={chartData}
              height={height}
              options={{
                maintainAspectRatio: true,
                title: {
                  display: true,
                  fontSize: 15,
                  text: title.toUpperCase()
                }
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TimeChart;
