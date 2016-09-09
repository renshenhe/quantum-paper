/* @flow */

import React, { PureComponent } from 'react';

export default class LeftSpin extends PureComponent {
  componentDidMount() {
    // this.circle.animate(spinKeyFrames, spinnerConfig)
  }
  startAnimation = () => {
    this.circle.animate(spinKeyFrames, spinnerConfig)

  }
  render() {
    return (
      <div style={{
        display: 'inline-block',
        position: 'relative',
        width: '50%',
        height: '100%',
        overflow: 'hidden',
        borderColor: 'inherit',
        backgroundColor: 'red',        
      }}>
        <div ref={r => this.circle = r} style={{
          transform: 'rotate(129deg)',
          width: '200%',
          boxSizing: 'border-box',
          height: '100%',
          borderWidth: '3px',
          borderStyle: 'solid',
          borderColor: 'inherit',
          borderRightColor: 'transparent',
          borderBottomColor: 'transparent',
          borderRadius: '50%',
          position: 'absolute',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        }} />
      </div>
    );
  }
};

const spinKeyFrames = [
  // { transform: 'rotate(130deg)', offset: 0 },
  // { transform: 'rotate(-5deg)', offset: .5 },
  // { transform: 'rotate(130deg)', offset: 1 },
    { transform: 'rotate(130deg)' },
  { transform: 'rotate(-5deg)' },
  { transform: 'rotate(130deg)' },
];
const spinnerConfig = {
  duration: 1333,
  easing: 'cubic-bezier(.4, 0, .2, 1)',
  iterations: Infinity,
  fill: 'both',
};