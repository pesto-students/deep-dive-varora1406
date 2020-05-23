import React from "react";
import { Chart } from "./chart/chart";
import { Line } from "./chart/line";
import { Bar } from "./chart/bar";

function App() {
  const chartData = [
    {
      x: 20,
      y: 240,
    },
    {
      x: 70,
      y: 120,
    },
    {
      x: 110,
      y: 150,
    },
    {
      x: 160,
      y: 180,
    },
  ];

  const barChart = [
    { quarter: "quarter-1", earnings: 13000 },
    { quarter: "quarter-2", earnings: 16500 },
    { quarter: "quarter-3", earnings: 14250 },
    { quarter: "quarter-4", earnings: 19000 },
  ];

  return (
    <>
      <Chart data={chartData}>
        <Line></Line>
      </Chart>

      <Chart style={{ width: "500px", height: "250px" }} data={barChart}>
        <Bar></Bar>
      </Chart>

      {/* (Idea) TODO: Add data directly to Line | Bar. Solving problem of complex data. E.g 
          <Chart>
            <Line data={data1} />
            <Line data={data2} />
          </Chart>
      */}
    </>
  );
}

export default App;
