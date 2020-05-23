import is from "is";
import React, { useEffect } from "react";
import { range } from "./array-util";

const validateData = (data) => {
  if (!is.array(data)) {
    throw TypeError(`data should be array, instead got -  ${data}`);
  }

  const xAxisData = data.filter(
    (element) => is.object(element) && element.hasOwnProperty("x")
  );
  const yAxisData = data.filter(
    (element) => is.object(element) && element.hasOwnProperty("y")
  );

  if (xAxisData.length < 1) {
    throw Error(`data should have atleast 1 object with 'x' property`);
  }

  if (yAxisData.length < 1) {
    throw Error(`data should have atleast 1 object with 'x' property`);
  }
};

const updateCanvasQuality = (canvas, context) => {
  let dpi = window.devicePixelRatio;
  let height = +getComputedStyle(canvas)
    .getPropertyValue("height")
    .slice(0, -2);
  let width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
  canvas.setAttribute("height", height * dpi);
  canvas.setAttribute("width", width * dpi);
};

const drawTextAndAxisLine = ({ context, text, xAxis, yAxis, direction }) => {
  context.moveTo(xAxis, yAxis);

  const linePoint = { x: 0, y: 0 };

  const textPoint = { x: 0, y: 0 };
  // TODO: Add support of multiple font sizes. Currently it's best fit tested only for 10px

  if (direction === "ttb") {
    linePoint.x = xAxis;
    linePoint.y = yAxis + 7;
    textPoint.x = xAxis;
    textPoint.y = linePoint.y + 15;
  } else if (direction === "ltr") {
    linePoint.x = xAxis - 7;
    linePoint.y = yAxis;
    textPoint.x = linePoint.x - 15;
    textPoint.y = linePoint.y + 5;
  }

  context.lineTo(linePoint.x, linePoint.y);
  context.textAlign = "center";

  context.fillText(text, textPoint.x, textPoint.y);
  context.stroke();
};

const calculateAxisPoints = ({ xAxisData, yAxisData }) => {
  const minimumDistanceInAxis = 40;
  xAxisData.sort((num1, num2) => num1 > num2);
  const rangeofXAxis = range({
    start: xAxisData[0],
    stop: xAxisData[xAxisData.length - 1],
    step: minimumDistanceInAxis,
    includeStartInResult: true,
    includeStopInResult: true,
  });

  yAxisData.sort((num1, num2) => num1 > num2);
  const rangeofYAxis = range({
    start: yAxisData[0],
    stop: yAxisData[yAxisData.length - 1],
    step: minimumDistanceInAxis,
    includeStartInResult: true,
    includeStopInResult: true,
  });

  return {
    x: rangeofXAxis,
    y: rangeofYAxis,
  };
};

const drawPoints = ({ canvas, context, axisPoints }) => {
  let yStartPoint = canvas.height - 50;
  let xStartPoint = 50;

  for (const xData of axisPoints.x) {
    xStartPoint += 40;
    drawTextAndAxisLine({
      context,
      text: xData,
      xAxis: xStartPoint,
      yAxis: yStartPoint,
      direction: "ttb",
    });
  }

  xStartPoint = 50;

  for (const yData of axisPoints.y) {
    yStartPoint -= 40;
    drawTextAndAxisLine({
      context,
      text: yData,
      xAxis: xStartPoint,
      yAxis: yStartPoint,
      direction: "ltr",
    });
  }
};

const pointDataOnChart = ({ dataArray, context, canvas }) => {
  const lowestX = Math.min(...dataArray.map((ele) => ele.x));
  const lowestY = Math.min(...dataArray.map((ele) => ele.y));

  let previousPoint;

  for (const data of dataArray) {
    context.beginPath();
    const currentPoint = {
      x: data.x + 90 - lowestX,
      y: canvas.height - 90 - data.y + lowestY,
    };

    context.arc(currentPoint.x, currentPoint.y, 2, 0, 2 * Math.PI);
    context.stroke();

    if (!is.undefined(previousPoint)) {
      context.beginPath();
      context.lineWidth = 4;
      context.moveTo(previousPoint.x, previousPoint.y);
      context.lineTo(currentPoint.x, currentPoint.y);
      context.stroke();
    }
    previousPoint = { ...currentPoint };
  }
};

const Line = ({ data, canvas }) => {
  validateData(data);

  useEffect(() => {
    const context = canvas.current.getContext("2d");

    updateCanvasQuality(canvas.current, context);
    // create X-axis, Y-axis for line chart
    context.moveTo(50, 15);
    context.lineTo(50, canvas.current.height - 50);
    context.lineTo(canvas.current.width - 50, canvas.current.height - 50);

    context.font = "13px serif";

    const xAxisData = data.map((object) => object.x);
    const yAxisData = data.map((object) => object.y);
    const axisPoints = calculateAxisPoints({ xAxisData, yAxisData });
    drawPoints({ canvas: canvas.current, context, axisPoints });
    pointDataOnChart({ dataArray: data, context, canvas: canvas.current });
  });

  return <></>;
};

export { Line };
