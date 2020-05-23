import is from "is";
import React, { useEffect } from "react";

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

const Line = ({ data, canvas }) => {
  validateData(data);

  useEffect(() => {
    const context = canvas.current.getContext("2d");

    const dpr = window.devicePixelRatio || 1;
    context.scale(dpr, dpr);

    context.lineWidth = 2;

    // create X-axis, Y-axis for line chart
    context.moveTo(50, 15);
    context.lineTo(50, canvas.current.height - 50);
    context.lineTo(canvas.current.width - 50, canvas.current.height - 50);

    drawMinMaxPoints(canvas, context, data);
  });

  return <></>;
};

const drawMinMaxPoints = (canvas, context, data) => {
  let XstartPoint = 50;
  let YstartPoint = canvas.current.height - 50;

  const dataSortedForYAxis = data.sort(
    (element1, element2) => element1.y > element2.y
  );

  context.font = "13px serif";

  // setting Y-Axis min text
  drawTextAndAxisLine({
    context,
    text: dataSortedForYAxis[0].y,
    xAxis: XstartPoint,
    yAxis: YstartPoint - 10,
    direction: "ltr",
  });

  // setting Y-Axis max text
  drawTextAndAxisLine({
    context,
    text: dataSortedForYAxis[dataSortedForYAxis.length - 1].y,
    xAxis: XstartPoint,
    yAxis: 15 + 10,
    direction: "ltr",
  });

  const dataSortedForXAxis = data.sort(
    (element1, element2) => element1.x > element2.x
  );

  // setting X-Axis min text
  drawTextAndAxisLine({
    context,
    text: dataSortedForXAxis[0].x,
    xAxis: XstartPoint + 15,
    yAxis: YstartPoint,
    direction: "ttb",
  });

  // setting X-Axis max text
  drawTextAndAxisLine({
    context,
    text: dataSortedForXAxis[dataSortedForXAxis.length - 1].x,
    xAxis: canvas.current.width - 50 - 20,
    yAxis: YstartPoint,
    direction: "ttb",
  });
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
    linePoint.x = xAxis - 15;
    linePoint.y = yAxis;
    textPoint.x = linePoint.x - 15;
    textPoint.y = linePoint.y + 5;
  }

  context.lineTo(linePoint.x, linePoint.y);
  context.textAlign = "center";

  context.fillText(text, textPoint.x, textPoint.y);
  context.stroke();
};

export { Line };
