/* @flow */

import React, { PureComponent } from 'react';

function getStyles(props) {
  const {
    barWidth,
    barColor,
    horizontal,
    labelPosition,
    labelSpacing,
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
  const sides = (bars === ('segment' || 'none'))
    ? ''
    : `1px solid ${barColor}`;
  // const sides = bars !== 'none' ? barColor : '';
  const rePositionBar = width ? 'left' : 'top';
  const styles = {
    container: {
      width: width ? `${width}px` : `${barWidth}px`,
      height: height ? `${height}px` : `${barWidth}px`,
      boxSizing: 'border-box',
      borderLeft: width && sides,
      borderRight: width && sides,
      borderTop: height && sides,
      borderBottom: height && sides,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // position: 'absolute',
      position: 'absolute',
      // top: (top && width) && '-2px',
      // marginBottom: (top && width) && `${barWidth + 2}px`,
      // top: '-16px',
      // left: spacing && left
      zIndex: '10',
      // left,
      // right,
      // top,
      // bottom,
      [labelPosition]: `-${barWidth + spacing}px`,
      // [rePositionBar]: `-18px`,
      // [rePositionBar]: `${-18}px`,
      // alignSelf: right && 'flex-end',

    },
    center: {
      height: bars === 'segment'
        ? height
            ? '1px' : '100%'
        : height ? '100%' : '1px',
      width: bars === 'segment'
        ? width
            ? '1px' : '100%'
        : width ? '100%' : '1px',
      backgroundColor: bars === 'none'
        ? ''
        : bars === 'segment' || 'default'
            ? barColor : barColor,
    },
    label: {
      position: 'absolute',
      color: 'red',
      fontSize: '10px',
      // [labelPosition]: (barWidth > 16) ? '-16px' : `-${ bars === 'segment' ? spacing + 2 : barWidth + 4}px`,
      [labelPosition]: labelSpacing
        ? `-${bars === 'segment' ? labelSpacing - 8 : labelSpacing - 4}px`
        : barWidth >= 16 ? '-16px' : `-${barWidth + 4}px`,
    }
  }
  return styles;
}

// const determineType = (bars, value) => {
//   let type = bars.toUppercase();
//   switch (type) {
//     case 'SEGMENT':
//       return
//     default:
//       return 'DEFAULT';
//   }
// }

export default class RulerBar extends PureComponent {
  static defaultProps = {
    barWidth: 16,
    barColor: 'red',
    labelPosition: 'left',
    spacing: 0,
    bars: 'default',
    labelSpacing: 16,
  }
  render() {
    const style = getStyles(this.props);
    return (
      <div style={style.container} className='rulerBar'>
        <div style={style.center} />
        <span style={style.label}>
          { this.props.label }
        </span>
      </div>
    );
  }
};  