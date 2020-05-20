import React from "react";

const defaultStyle = {
  width: "25rem",
  height: "25rem",
};

const Chart = ({ style, children }) => {
  return <canvas style={{ ...defaultStyle, ...style }}>{children}</canvas>;
};

export { Chart };
