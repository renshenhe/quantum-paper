/* @flow */

import React, { Component } from 'react';
import RulerBar from './RulerBar';

type Props = {
  mask?: number,
  width?: number,
  height?: number,
  scale?: number,
  legs?: number, 
};

const pink = '#E91E63';

const zeroCheck = (props) => {
  return props === 0 ? true : false
};
const makePositive = (num) => {
  if (num < 0) {
    return `${Math.abs(num)}px`;
  }
  return `${num}px`
};

const makePixel = (num) => {
  if (typeof num === 'string') return num;

  return `${num}px`;
}
function getStyles(props, state) {
  const {
    mask,
    width,
    height,
    legs,
    scale,
    position,
    vertical,
    horizontal,
    top,
    left,
    right,
    bottom,
    highlight,
    size,
    maskWidth,
    maskHeight,
    maskPaddingLeft,
    maskPaddingRight,
    maskPaddingTop,
    maskPaddingBottom,
    labelPosition,
  } = props;

  const w = `${width}px`;
  const h = `${height}px`;
  const t = `${top}px`;
  const l = `${left}px`;
  const r = `${right}px`;
  const b = `${bottom}px`;

  let maskColor = pink;
  let maskOpacity = mask % 2 === 0 ? '.12' : '.26';
  if (typeof mask === 'string') {
    maskColor = mask;
    maskOpacity = 1;
  }

  const styles = {
    container: {
      width: width ? w : (size ? `${size}px` : '100%'),
      height: height ? h : (size ? `${size}px` : '100%'),
      position: 'absolute',
      display: 'flex',
      flexDirection: (bottom) && 'column',
      boxSizing: 'border-box',
      top: zeroCheck(bottom) || bottom 
        ? '' 
        : top 
          ? t 
          : '0',

      left: zeroCheck(right) ? '' : left && l,
      right: right && r,
      bottom: zeroCheck(bottom) && b,
      pointerEvents: 'none',
    },
    maskContainer: {
      width: makePixel(maskWidth),
      height: makePixel(maskHeight),
      position: 'absolute',
      boxSizing: 'border-box',
      left: height && (left && makePositive(left)),
      top: width && (top && makePositive(top)),
      right: labelPosition === 'right' && '0px', // may not need
      paddingLeft: makePixel(maskPaddingLeft),
      paddingRight: makePixel(maskPaddingRight),
      paddingTop: makePixel(maskPaddingTop),
      paddingBottom: makePixel(maskPaddingBottom),
    },
    mask: {
      width: '100%',
      height: '100%',
      backgroundColor: mask && maskColor,
      opacity: maskOpacity,
      // marginLeft: makePixel(maskPaddingLeft),
      // marginRight: makePixel(maskPaddingRight),
      // paddingTop: makePixel(maskPaddingTop),
      // paddingBottom: makePixel(maskPaddingBottom),
    },
    ruler: {
      display: 'flex',
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
    spacer: {
      flexGrow: '1',
      // marginBottom: (bottom && width ) && '2px',
      // marginTop: (top && width) && '2px',
    }
  }
  return styles;
}

export default class Ruler extends Component {
  static defaultProps = {
    maskWidth: '100%',
    maskHeight: '100%',
    maskPaddingLeft: '0px',
    maskPaddingRight: '0px',
    maskPaddingTop: '0px',
    maskPaddingBottom: '0px',
  };
  render() {
    const { width, height, barWidth, barHeight, label, labelPosition, spacing, bars } = this.props;
    const style = getStyles(this.props, this.state);
    const { left, right, bottom, top } = style.container
    return (
      <div className='ruler' style={style.container}>
        <div className='mask-container' style={style.maskContainer}>
          <div className='mask' style={style.mask} />
        </div>
        {
          (zeroCheck(this.props.right) || zeroCheck(this.props.bottom)) ? <div style={style.spacer} /> : null
        }
          {
            bars !== 'none' &&
              <RulerBar
                label={label || `${width || height}`}
                labelPosition={labelPosition}
                spacing={spacing}
                height={height}
                width={width}
                left={left}
                right={right}
                top={top}
                bottom={bottom}
                barWidth={barWidth}
                barHeight={barHeight}
                bars={bars}
              />
            
          }
      </div>
    );
  }
};