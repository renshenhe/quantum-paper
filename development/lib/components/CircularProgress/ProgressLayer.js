/* @flow */

import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import LeftSpinner from './LeftSpinner';
import RightSpinner from './RightSpinner';
function getStyles(props) {
  const {
    color,
    indeterminate,
  } = props;

  const styles = {
    container: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderColor: color,
      opacity: '0',
      direction: 'ltr',
      // transition: 'transform 666.5ms cubic-bezier(0.4, 0, 0.2, 1)',
      // transform: 'rotate(0deg)',
    },
    clipper: {
      display: 'inline-block',
      position: 'relative',
      width: '50%',
      height: '100%',
      overflow: 'hidden',
      borderColor: 'inherit',
    },
    leftSpinner: {
      width: '200%',
      boxSizing: 'border-box',
      height: '100%',
      borderWidth: '3px',
      borderStyle: 'solid',
      // borderColor: 'inherit',
      borderTopColor: 'inherit',
      borderLeftColor: 'inherit',
      borderBottomColor: 'transparent',
      borderRightColor: 'transparent',
      borderRadius: '50%',
      // borderLeftColor: 'transparent !important',

      position: 'absolute',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      transform: 'rotate(129deg)',
    },
    rightSpinner: {
      left: '-100%',
      width: '200%',
      transform: 'rotate(-129deg)',
      boxSizing: 'border-box',
      height: '100%',
      borderWidth: '3px',
      borderStyle: 'solid',
      // borderColor: 'inherit',
      // borderLeftColor: 'inherit'
      borderRightColor: 'inherit',
      borderTopColor: 'inherit',
      borderBottomColor: 'transparent',
      borderLeftColor: 'transparent',
      // borderRightColor: 'transparent !important',
      
      borderRadius: '50%',
      position: 'absolute',
      top: '0',
      right: '0',
      bottom: '0',

    },
    gapPatch: {
      position: 'absolute',
      boxSizing: 'border-box',
      top: '0',
      left: '45%',
      width: '10%',
      height: '100%',
      overflow: 'hidden',
      borderColor: 'inherit',
      // borderBottomColor: 'transparent',
    },
    circle: {
      width: '1000%',
      left: '-450%',
      boxSizing: 'border-box',
      height: '100%',
      borderWidth: '3px',
      borderStyle: 'solid',
      // borderColor: 'inherit',
      borderTopColor: 'inherit',
      borderLeftColor: 'inherit',
      borderRightColor: 'inherit',
      borderBottomColor: 'transparent',
      borderRadius: '50%',
      animation: 'none',
      position: 'absolute',
      top: '0',
      right: '0',
      bottom: '0',
    },
  };
  return styles;
};

export default class ProgressLayer extends PureComponent {
  componentDidMount() {
    this.layer.animate(unfillRotateKeyframes, unfillRotateConfig)
    this.layer.animate(this.props.fadeInOut, unfillRotateConfig);
    // this.refs.layer.animate(this.props.fadeInOut, unfillRotateConfig);
    // console.log(Array.isArray(this.props.layer))
    // ele.animate(unfillRotateKeyframes, unfillRotateConfig);
    this.refs.leftSpinner.animate(leftSpin, spinConfig);
    this.refs.rightSpinner.animate(rightSpin, spinConfig);

  }
  render() {
    const style = getStyles(this.props, this.state);

    return (
      <div
        style={style.container}
        ref={r => this.layer = r}
      >
        <div style={style.clipper}>
          <div style={style.leftSpinner} ref='leftSpinner' />
        </div>
        <div style={style.gapPatch}>
          <div style={style.circle} />
        </div>
        <div style={style.clipper}>
          <div style={style.rightSpinner} ref='rightSpinner' />
        </div>
      </div>
    );
  }
};

// const getRounds = (rounds) => {
//   switch (rounds) {
//     case 0:
//       return 
//     default:
//       return 0;
//   }
// };

const unfillRotateKeyframes = [
  { transform: 'none', },
  { transform: 'rotate(135deg)', offset: .125 },
  { transform: 'rotate(270deg)', offset: .25 },
  { transform: 'rotate(405deg)', offset: .375 },
  { transform: 'rotate(540deg)', offset: .50 },
  { transform: 'rotate(675deg)', offset: .625 },
  { transform: 'rotate(810deg)', offset: .75 },
  { transform: 'rotate(945deg)', offset: .875 },
  { transform: 'rotate(1080deg)', offset: 1 },
];

const leftSpin = [
  { transform: 'rotate(130deg)', offset: 0 },
  { transform: 'rotate(-5deg)', offset: .5 },
  { transform: 'rotate(130deg)', offset: 1 },
];
const rightSpin = [
  { transform: 'rotate(-130deg)', offset: 0 },
  { transform: 'rotate(5deg)', offset: .5 },
  { transform: 'rotate(-130deg)', offset: 1 },
];
const spinConfig = {
  duration: 1333,
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  iterations: Infinity,
  fill: 'both',
};
const unfillRotateConfig = {
  duration: 5332,
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  iterations: Infinity,
  fill: 'both',
};

