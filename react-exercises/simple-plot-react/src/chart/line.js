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

    init(canvas, context, data);
  });

  return <></>;
};

const init = (canvas, context, data) => {
  let XstartPoint = 50;
  let YstartPoint = canvas.current.height - 50;

  const dataSortedForYAxis = data.sort(
    (element1, element2) => element1.y > element2.y
  );

  // setting Y-Axis min text
  context.moveTo(XstartPoint, YstartPoint - 10);
  context.lineTo(XstartPoint - 10, YstartPoint - 10);
  context.textAlign = "end";
  context.fillText(dataSortedForYAxis[0].y, XstartPoint - 15, YstartPoint - 7);

  // setting Y-Axis max text
  context.moveTo(XstartPoint, 15 + 10);
  context.lineTo(XstartPoint - 10, 15 + 10);
  context.fillText(
    dataSortedForYAxis[dataSortedForYAxis.length - 1].y,
    XstartPoint - 15,
    15 + 10 + 3
  );

  const dataSortedForXAxis = data.sort(
    (element1, element2) => element1.x > element2.x
  );

  // setting X-Axis min text
  context.moveTo(XstartPoint + 15, YstartPoint);
  context.lineTo(XstartPoint + 15, YstartPoint + 7);
  context.textAlign = "center";
  context.fillText(
    dataSortedForXAxis[0].x,
    XstartPoint + 15,
    YstartPoint + 10 + 7
  );

  // setting X-Axis max text
  context.moveTo(canvas.current.width - 50 - 20, YstartPoint);
  context.lineTo(canvas.current.width - 50 - 20, YstartPoint + 7);
  context.fillText(
    dataSortedForXAxis[dataSortedForXAxis.length - 1].x,
    canvas.current.width - 50 - 20,
    YstartPoint + 10 + 7
  );
  context.stroke();
};

export { Line };
