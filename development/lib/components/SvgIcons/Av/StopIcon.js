/* @flow */

import React, { PureComponent } from 'react';

export default class StopIcon extends PureComponent {
  static defaultProps = {
    fill: '#757575',
    height: '24px',
    width: '24px',
  };
  render() {
    return (
      <svg fill={this.props.fill} width={this.props.width} height={this.props.height} viewBox='0 0 24 24'>
        <path d="M6 6h12v12H6z"/> 
      </svg>
    );
  }
};