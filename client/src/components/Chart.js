import React, { Component } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { isMobile } from "react-device-detect";

export class Chart extends Component {
  render() {
    const chartData = {
      labels: Object.keys(this.props.data)
        .slice(0, 4)
        .map(a => a.toUpperCase()),
      datasets: [
        {
          label: "# of Votes",
          data: Object.values(this.props.data).slice(0, 4),
          backgroundColor: [
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(102, 187, 106,0.2)"
          ],
          borderColor: [
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(102, 187, 106, 1)"
          ],
          borderWidth: 1
        }
      ]
    };
    let height = 180;
    if (isMobile) {
      height = 280;
    }
    return (
      <div>
        <div className="row">
          <div className="col s12 m12">
            <Doughnut
              data={chartData}
              height={height}
              options={{
                maintainAspectRatio: true,
                title: {
                  display: true,
                  fontSize: 15,
                  text: this.props.data.state
                }
              }}
            />
          </div>
          <div className="row">
            <div className="col s12 m12">
              <Bar
                data={chartData}
                height={height}
                options={{
                  maintainAspectRatio: true,
                  title: {
                    display: true,
                    fontSize: 15,
                    text: this.props.data.state
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chart;
