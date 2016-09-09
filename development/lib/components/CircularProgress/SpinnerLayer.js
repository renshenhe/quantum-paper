/* @flow */

import React, { PureComponent } from 'react';
import LeftSpin from './LeftSpin';

export default class SpinnerLayer extends PureComponent {
  componentDidMount() {
    // this.refs.spinnerLayer.animate(fadeInOut, unfillRotateConfig);
    this.layer.animate(singleRotate, unfillRotateConfig);

    // this.refs.spinnerLayer.animate(unfillRotateKeyframes, unfillRotateConfig);
  }
  render() {
    return (
      <div ref={r => this.layer = r} onAnimationStart={() => { console.log('animation started')}} style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        // opacity: '0',
      }}>
        <LeftSpin />
        <div style={{
          position: 'absolute',
          boxSizing: 'border-box',
          top: '0px',
          left: '45%',
          width: '10%',
          height: '100%',
          overflow: 'hidden',
          borderColor: 'inherit',          
        }}>
          <div style={{
            width: '1000%',
            left: '-450%',
            boxSizing: 'border-box',
            height: '100%',
            borderWidth: '3px',
            borderStyle: 'solid',
            borderColor: 'inherit',
            borderBottomColor: 'transparent',
            borderRadius: '50%',
            animation: 'none',
            position: 'absolute',
            top: '0px',
            right: '0px',
            bottom: '0px',
          }} />
        </div>
      </div>
    );
  }
};  

const unfillRotateConfig = {
  duration: 5332,
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  iterations: Infinity,
  fill: 'both',
};
const unfillRotateKeyframes = [
  { transform: 'none', offset: 0 },
  { transform: 'rotate(135deg)', offset: .125 },
  { transform: 'rotate(270deg)', offset: .25 },
  { transform: 'rotate(405deg)', offset: .375 },
  { transform: 'rotate(540deg)', offset: .50 },
  { transform: 'rotate(675deg)', offset: .625 },
  { transform: 'rotate(810deg)', offset: .75 },
  { transform: 'rotate(945deg)', offset: .875 },
  { transform: 'rotate(1080deg)', offset: 1 },
];
const singleRotate = [
  { transform: 'none', opacity: .99, offset: 0 },
  { transform: 'rotate(135deg)', offset: .125 },
  { transform: 'rotate(270deg)', opacity: .99, offset: .25 },
  { opacity: 0, offset: .26 },
  { transform: 'rotate(405deg)', offset: .375 },
  { transform: 'rotate(540deg)', offset: .50 },
  { transform: 'rotate(675deg)', offset: .625 },
  { transform: 'rotate(810deg)', offset: .75 },
  { transform: 'rotate(945deg)', offset: .875 },
  { opacity: 0, offset: .89},
  { opacity: .99, offset: .9},
  { transform: 'rotate(1080deg)', opacity: .99, offset: 1 },
];
const fadeInOut = [
    { opacity: .99, offset: 0 },
    { opacity: .99, offset: .25 },
    { opacity: 0, offset: .26 },
    { opacity: 0, offset: .89 },
    { opacity: .99, offset: .90 },
    { opacity: .99, offset: 1 },
  ] 