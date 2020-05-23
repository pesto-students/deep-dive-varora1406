import React, { useEffect } from "react";
const Bar = ({ data, canvas }) => {
  useEffect(() => {
    const context = canvas.current.getContext("2d");
    const colorArr = [
      "#C0392B",
      "#AF7AC5",
      "#5499C7",
      "#48C9B0",
      "#F4D03F",
      "#DC7633",
      "#5D6D7E",
    ];
    let divideValue = 300;
    let constantInterval = 20;
    for (const newdata of data) {
      context.lineWidth = 10;
      context.fillStyle = colorArr[Math.floor(Math.random() * 7)];
      context.moveTo(constantInterval, newdata.earnings / divideValue);
      context.fillRect(
        constantInterval,
        newdata.earnings / divideValue,
        30,
        600 - newdata.earnings / divideValue
      );
      context.font = "15px Arial";
      context.fillText(
        `${newdata.quarter} - ${newdata.earnings}`,
        constantInterval,
        newdata.earnings / divideValue - 10
      );
      constantInterval += 100;
    }
  });
  return <></>;
};
export { Bar };
