/* @flow */

import React, { PureComponent } from 'react';
import ProgressLayer from './ProgressLayer';

function getStyles(props, state) {

  const styles = {
    container: {
      display: 'inline-block',
      position: 'relative',
      width: '28px',
      height: '28px',
    },
  };

  return styles;
};

export default class CircularProgress extends PureComponent {
  componentDidMount() {
    const el = this.circle;
    console.log(this.animation)
  }
  render() {
    const style = getStyles(this.props, this.state);
    return (
      <div ref={r => this.circle = r } style={style.container}>
        {
          colors.map((color, i) => (
            <ProgressLayer layer={i} color={color} key={color} />
          ))
        }
      </div>
    );
  }
};

const colors = [
'rgb(66,165,245)',
'rgb(244,67,54)',
'rgb(253,216,53)',
'rgb(76,175,80)'
];

const fadeInOut = [
  {
    '0%': '.99',
    '25%': '.99',
    '26%': '0',
    '89%': '0',
    '90%': '.99',
    '100%': '.99'
  },
  {
    '0%': '0',
    '15%': '0',
    '25%': '.99',
    '50%': '.99',
    '51%': '0',
  },
  {
    '0%': '0',
    '40%': '0',
    '50%': '.99',
    '75%': '.99',
    '76%': '0',
  },
  {
    '0%': '0',
    '65%': '0',
    '75%': '.99',
    '90%': '.99',
    '100%': '.99',
  }
];

const unfillRotate = {
  '12.5%': 'transform: rotate(135deg)',
  '25%': 'transform: rotate(270deg)',
  '37.5%': 'transform: rotate(405deg)',
  '50%': 'transform: rotate(540deg)',
  '62.5%': 'transform: rotate(675deg)',
  '75%': 'transform: rotate(810deg)',
  '87.5%': 'transform: rotate(945deg)',
  '100%': 'transform: rotate(1080deg)',
}

