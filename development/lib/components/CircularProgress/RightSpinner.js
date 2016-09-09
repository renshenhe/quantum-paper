/* @flow */

import React, { PureComponent } from 'react';

export default class LeftSpinner extends PureComponent {
  componentDidMount() {
    this.refs.rightSpinner.animate([
      { transform: 'rotate(-130deg)' },
      { transform: 'rotate(5deg)', offset: .5 },
      { transform: 'rotate(-130deg)', offset: 1 },      
    ],
    {
      duration: 1333,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      iterations: Infinity,
      fill: 'both',
    });
  };
  startAnimation = () => {
    this.refs.rightSpinner.animate([
      { transform: 'rotate(-130deg)' },
      { transform: 'rotate(5deg)', offset: .5 },
      { transform: 'rotate(-130deg)', offset: 1 },      
    ],
    {
      duration: 1333,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      iterations: Infinity,
      fill: 'both',
    });
  };
  render() {
    return (
      <div ref='rightSpinner' style={{
        left: '-100%',
        width: '200%',
        transform: 'rotate(-129deg)',
        boxSizing: 'border-box',
        height: '100%',
        borderWidth: '3px',
        borderStyle: 'solid',
        borderRightColor: 'inherit',
        borderTopColor: 'inherit',
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRadius: '50%',
        position: 'absolute',
        top: '0px',
        right: '0px',
        bottom: '0px',
      }} />
    );
  }
};