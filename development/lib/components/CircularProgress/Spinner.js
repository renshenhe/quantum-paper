/* @flow */

import React, { PureComponent } from 'react';
import SpinnerLayer from './SpinnerLayer';

export default class Spinner extends PureComponent {
  componentDidMount() {
    this.spinner.animate([
      { transform: 'none' },
      { transform: 'rotate(360deg)', offset: 1 },
    ], containerRotateConfig)
  }
  render() {
    return (
      <div ref={r => this.spinner = r} style={style.container}>
        <SpinnerLayer />
      </div>
    );
  }
};

const style = {
  container: {
    display: 'inline-block',
    position: 'relative',
    width: '28px',
    height: '28px',
    backgroundColor: '#b3d4fc',
  }
}


const containerRotateConfig = {
  duration: 1568.23529412,
  easing: 'linear',
  iterations: Infinity
}