import React, { useRef, cloneElement } from "react";
import is from "is";

const defaultStyle = {
  width: "25rem",
  height: "25rem",
};

const Chart = ({ style, children, data }) => {
  const canvas = useRef(null);
  const combinedStyle = { ...defaultStyle, ...style };

  return (
    <canvas
      ref={canvas}
      width={combinedStyle.width}
      height={combinedStyle.height}
      style={{ ...defaultStyle, ...style }}
    >
      {is.object(children) && cloneElement(children, { canvas, data })}
    </canvas>
  );
};

export { Chart };
