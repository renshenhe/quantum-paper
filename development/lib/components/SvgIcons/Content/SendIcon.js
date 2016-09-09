/* @flow */

import React, { PureComponent } from 'react';

export default class SendIcon extends PureComponent {
  static defaultProps = {
    fill: '#757575',
    height: '24px',
    width: '24px',
  };
  render() {
    return (
      <svg fill={this.props.fill} width={this.props.width} height={this.props.height} viewBox='0 0 24 24'>
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/> 
      </svg>
    );
  }
};