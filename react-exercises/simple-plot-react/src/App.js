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
      x: 30,
      y: 120,
    },
    {
      x: 40,
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
      <Chart style={{ width: "500", height: "250" }} data={barChart}>
        <Bar></Bar>
      </Chart>
    </>
  );
}

export default App;
