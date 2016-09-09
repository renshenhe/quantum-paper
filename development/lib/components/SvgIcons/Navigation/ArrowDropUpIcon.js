/* @flow */

import React, { PureComponent } from 'react';

export default class ArrowDropUpIcon extends PureComponent {
  static defaultProps = {
    fill: '#757575',
    height: '24px',
    width: '24px',
  };
  render() {
    return (
      <svg fill={this.props.fill} width={this.props.width} height={this.props.height} viewBox='0 0 24 24'>
        <path d="M7 14l5-5 5 5z"/> 
      </svg>
    );
  }
};