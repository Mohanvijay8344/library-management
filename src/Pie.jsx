import React, { Component } from "react";
import Chart from "react-apexcharts";
import { useState } from "react";

export function Pie(){

  const [char, setChar] = useState({
  options: {},
  series: [44, 55, 41, 17, 15],
  labels: ['A', 'B', 'C', 'D', 'E'],
  seriesname: ["series18","series19","series20","series21","series25"],
  });


  return(
    <div className="charts">
      <div className="series">
      <h2>Available Books Generes</h2>
      <p>Series-1 = Fiction,Science-Fiction,Non-Fiction</p>
      <p>Series-2 = Novel,Genere-Fiction,Children's Literature</p>
      <p>Series-3 = Narative,Romance-Novel,Mystery</p>
      <p>Series-4 = Fantasy,Horror,Thriller</p>
      <p>Series-5 = True-Crime,Politics,Drama</p>
      </div>
      <div className="chart">
      <Chart
        options={char.options}
        series={char.series}
        labels={char.labels}
        type="pie"
        width="500" height="300"
      />
      </div>
    </div>
  )
}