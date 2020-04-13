import React, { Component } from "react";
import { Line } from "react-chartjs-2";

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
    return (
      <div>
        <div className="row ">
          <div className="col s12 m12 ">
            <Line
              data={chartData}
              // height={250}
              options={{
                maintainAspectRatio: true,
                onResize: (chart, size) => {
                  chart.options.legend.display = size.height < 128;
                  size.height = 250;
                  chart.update();
                },
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
