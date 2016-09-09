/* @flow */

import React, { PureComponent } from 'react';

export default class CircularProgress extends PureComponent {
  static defaultProps = {
    width: '24px',
    height: '24px',
  };
  componentDidMount() {
    this.refs.spinner.animate(rotation.outerKeyframes, rotation.outerTiming);
    this.refs.spinnerPath.animate(fillUnfill.keyframes, fillUnfill.timing);
    this.refs.spinnerPath.animate(rotation.innerKeyframes, rotation.innerTiming);
    this.refs.spinnerPath.animate(coloring.keyframes, coloring.timing);
  }
  render() {
    const { width, height } = this.props;
    return (
      <div style={style.container}>
        <svg
          style={style.svg}
          width={width} 
          height={height}
          viewBox='0 0 28 28'
        >
          <g ref='spinner' style={style.spinner}>
            <path
              style={style.spinnerPath}
              ref='spinnerPath'
              fill='none'
              d='M 14,1.5 A 12.5,12.5 0 1 1 1.5,14'
              strokeLinecap='round' />
          </g>
        </svg>
      </div>
    );
  }
};

const style = {
  container: {
    margin: '10px 20px',
    textAlign: 'center',
    display: 'inline-block',
  },
  svg: {
    borderRadius: '50%',
    backgroundColor: '#FFF',
    padding: '8px',
    boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
  },
  spinner: {
    width: '64px',
    height: '64px',
    strokeWidth: '3px',
    transformOrigin: '50% 50%',
  },
  spinnerPath: {
    strokeDasharray: '58.9',
    strokeDashoffset: '58.9',
    transformOrigin: '50% 50%',
  }
}

const fillUnfill = {
  keyframes: [
    { strokeDashoffset: 58.8, offset: 0 },
    { strokeDashoffset: 0, offset: .50 },
    { strokeDashoffset: -58.4, offset: 1 }
  ],
  timing: {
    duration: 1333,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    iterations: Infinity,
    fill: 'forwards',
  }
};
const coloring = {
  keyframes: [
    { stroke: '#754fa0', offset: 0 },
    { stroke: '#09b7bf', offset: .20 },
    { stroke: '#90d36b', offset: .40 },
    { stroke: '#f2d40d', offset: .60 },
    { stroke: '#fcb12b', offset: .80 },
    { stroke: '#ed1b72', offset: 1 }
  ],
  timing: {
    duration: 5332,
    easing: 'linear',
    iterations: Infinity,
    fill: 'forwards',
  },
};
const rotation = {
  outerKeyframes: [
    { transform: 'rotate(0deg)', offset: 0 },
    { transform: 'rotate(360deg)', offset: 1 },
  ],
  innerKeyframes: [
    { transform: 'rotate(0deg)', offset: 0 },
    { transform: 'rotate(-360deg)', offset: 1 },
  ],
  outerTiming: {
    duration: 1568.63,
    easing: 'linear',
    iterations: Infinity,
  },
  innerTiming: {
    duration: 5332,
    easing: 'steps(4)',
    // steps: 4,
    iterations: Infinity,
    fill: 'forwards',   
  }
};
