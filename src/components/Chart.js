import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ['Javascript', 'Python', 'PHP'],
        datasets: [
          {
            label: 'SUM',
            data: [
              2100,
              2000,
              700
            ],
            backgroundColor: [
              'rgba(255, 99, 132)',
              'rgba(255, 939, 132)',
              'rgba(255, 194, 200)'
            ]
          }
        ]
      }
    }
  }

  render() {
    return (
      <div className="chart">
      <Bar
        data={this.state.chartData}
        options={{
          // maintainAspectRatio: false
          aspectRatio: 5,
          responsive: true
        }}
      />
      </div>
    )
  }
}

export default Chart;
