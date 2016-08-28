/* @flow */

import React, { PureComponent } from 'react';

function getStyles(props) {
  const {
    barHeight,
    barColor,
    horizontal,
    labelPosition,
    length,
    width,
    height,
    left,
    right,
    top,
    bottom,
    spacing,
    bars,
  } = props;

  const sides = bars !== 'none' ? '1px solid #E91E63' : '';
  const rePositionBar = width ? 'left' : 'top';
  const styles = {
    container: {
      width: width ? `${width}px` : `${barHeight}px`,
      height: height ? `${height}px` : `${barHeight}px`,
      boxSizing: 'border-box',
      borderLeft: width && sides,
      borderRight: width && sides,
      borderTop: height && sides,
      borderBottom: height && sides,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // position: 'absolute',
      position: 'relative',
      // top: (top && width) && '-2px',
      // marginBottom: (top && width) && `${barHeight + 2}px`,
      // top: '-16px',
      // left: spacing && left
      zIndex: '10',
      // left,
      // right,
      // top,
      // bottom,
      // [labelPosition]: `-${spacing}`,
      // [rePositionBar]: `-18px`,
      // [rePositionBar]: `${-18}px`,
      // alignSelf: right && 'flex-end',

    },
    center: {
      height: width ? '1px' : '100%' ,
      width: width ? '100%' : '1px' ,
      backgroundColor: bars !== 'none' ? barColor : '',
    },
    label: {
      position: 'absolute',
      color: 'red',
      fontSize: '10px',
      // [labelPosition]: `${labelPosition === ('top' || 'left') ? '-' : ''}${barHeight}`,
      [labelPosition]: (barHeight > 16) ? '-16px' : `-${barHeight}px`,
    }
  }

  return styles;
}

export default class RulerBar extends PureComponent {
  static defaultProps = {
    barHeight: 16,
    barColor: 'red',
    labelPosition: 'right',
    spacing: '8px',
    bars: 'all',
  }
  render() {
    const style = getStyles(this.props);
    return (
      <div style={style.container}>
        <div style={style.center} />
        <span style={style.label}>
          { this.props.label }
        </span>
      </div>
    );
  }
};  