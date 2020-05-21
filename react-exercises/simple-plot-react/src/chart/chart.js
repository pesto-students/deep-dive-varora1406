import React, { useRef, cloneElement } from "react";
import is from "is";

const defaultStyle = {
  width: "25rem",
  height: "25rem",
};

const Chart = ({ style, children, data }) => {
  const canvas = useRef(null);

  return (
    <canvas ref={canvas} style={{ ...defaultStyle, ...style }}>
      {is.object(children) && cloneElement(children, { canvas, data })}
    </canvas>
  );
};

export { Chart };
