/* @flow */

import React, { PureComponent } from 'react';

export default class SignalCellularNullIcon extends PureComponent {
  static defaultProps = {
    fill: '#757575',
    height: '24px',
    width: '24px',
  };
  render() {
    return (
      <svg fill={this.props.fill} width={this.props.width} height={this.props.height} viewBox='0 0 24 24'>
        <path d="M20 6.83V20H6.83L20 6.83M22 2L2 22h20V2z"/> 
      </svg>
    );
  }
};