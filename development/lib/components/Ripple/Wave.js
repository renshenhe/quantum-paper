import React from 'react';

export const Wave = ({ data, style: { scale, opacity } }) => (
  <div
    style={{
      ...data,
      WebkitTransform: `scale(${scale}, ${scale})`,
      transform: `scale3d(${scale}, ${scale}, 1)`,
      opacity
    }}
  />
)