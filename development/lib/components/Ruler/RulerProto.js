/* @flow */

import React, { PureComponent } from 'react';
import RulerBar from './RulerBar';

function getStyles(props) {
  const {
    label,
    top,
    left,
    right,
    bottom,
    width,
    height,
  } = props;

  const styles = {
    wrapper: {
      display: 'inline-block',
      position: 'relative',
    },
    container: {
      position: 'absolute',
      width,
      height,
      top,
      left,
      right,
      bottom,
    }
  }

  return styles;
}

export default class Ruler extends PureComponent {
  static defaultProps = {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    barHeight: ''
  };
  render() {
    const { horizontal } = this.props;
    const style = getStyles(this.props)
    return (
      <div
        style={style.wrapper}
        ref='wrapper'
      >
      <RulerBar
        horizontal={true}
      />
        { this.props.children }
      </div>
    );
  }
};


