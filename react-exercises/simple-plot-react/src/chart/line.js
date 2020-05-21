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
    context.moveTo(50, 15);
    context.lineTo(50, canvas.current.height - 50);
    context.lineTo(canvas.current.width - 50, canvas.current.height - 50);
    context.stroke();
  });

  return <></>;
};

export { Line };
