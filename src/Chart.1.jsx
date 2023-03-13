import ReactApexChart from 'react-apexcharts'
import { useState } from 'react';

export function Chart() {
  const [state, setState] = useState({
    series: [{
      name: "presented",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
  options: {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Attendance by Month',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], 
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
  },
  })
  
  return (
    <div>
      <ReactApexChart options={state.options} series={state.series} type="line" height={350} />
    </div>
  );
}
