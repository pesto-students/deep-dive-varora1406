import React from "react";
import { Chart } from "./chart/chart";
import { Line } from "./chart/line";

function App() {
  const chartData = [
    {
      x: 20,
      y: 100,
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

  return (
    <Chart data={chartData}>
      <Line></Line>
    </Chart>
  );
}

export default App;
