/* @flow */

import React, { PureComponent } from 'react';

type Props = {
  inset?: number;
  color?: string;
};

function getStyles(props: Props) {
  const {
    inset,
    color,
  } = props;

  const styles = {
    height: '1px',
    backgroundColor: color,
    marginTop: '-1px',
    marginLeft: `${inset}px`,
    border: 'none',
    // zIndex: '10', //needed possibly
    position: 'relative',
  }
  return styles;
};

export default class Divider extends PureComponent {
  static defaultProps = {
    color: 'rgba(0, 0, 0, 0.12)',
  };
  render() {
    const style = getStyles(this.props)
    return (
      <div style={style} />
    );
  }
};