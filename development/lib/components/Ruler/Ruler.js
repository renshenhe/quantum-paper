/* @flow */

import React, { Component } from 'react';
import RulerBar from './RulerBar';

type Props = {
  marker?: number,
  width?: number,
  height?: number,
  scale?: number,
  legs?: number, 
};

const pink = '#E91E63';

const makePositive = (num) => {
  if (num < 0) {
    return `${Math.abs(num)}px`;
  }
  return `${num}px`
}
function getStyles(props, state) {
  const {
    marker,
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
  } = props;

  const w = `${width}px`;
  const h = `${height}px`;
  const t = `${top}px`;
  const l = `${left}px`;
  const r = `${right}px`;
  const b = `${bottom}px`;

  let markerColor = pink;
  let markerOpacity = marker % 2 === 0 ? '.12' : '.26';
  if (typeof marker === 'string') {
    markerColor = marker;
    markerOpacity = 1;
  }

  const styles = {
    wrapper: {
      display: 'inline-block',
      position: 'relative',
    },
    container: {
      width: width ? w : (size ? `${size}px` : '100%'),
      height: height ? h : (size ? `${size}px` : '100%'),
      position: 'absolute',
      display: 'flex',
      flexDirection: (bottom) && 'column',
      boxSizing: 'border-box',
      top: top && t,
      left: left && l,
      right: right && r,
      bottom: bottom && b,
      pointerEvents: 'none',
    },
    mask: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      // top: '0',
      // left: '0',
      backgroundColor: marker && markerColor,
      opacity: markerOpacity,
      boxSizing: 'border-box',
      left: height && (left && makePositive(left)),
      top: width && (top && makePositive(top)),
      // right: width && (right && makePositive(right)),
      // bottom: (bottom && makePositive(bottom)) 
      // left,
      // right,
      // bottom
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
  render() {
    const { width, height, barHeight, label, labelPosition, spacing, bars } = this.props;
    const style = getStyles(this.props, this.state);
    const { left, right, bottom, top } = style.container
    return (
      <div style={style.container}>
        <div style={style.mask} />
        {
          (this.props.right || this.props.bottom) ? <div style={style.spacer} /> : null
        }
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
            barHeight={barHeight}
            bars={bars}
          />
      </div>
    );
  }
};