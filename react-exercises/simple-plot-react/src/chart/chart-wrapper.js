import React from 'react';

const defaultStyle = {
  width: '25rem',
  height: '25rem',
}

const Chart = ({ style }) => {
  return <div style={{ ...defaultStyle, ...style }}></div >;
};

export { Chart }