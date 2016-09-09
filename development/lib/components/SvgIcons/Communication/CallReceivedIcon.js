/* @flow */

import React, { PureComponent } from 'react';

export default class CallReceivedIcon extends PureComponent {
  static defaultProps = {
    fill: '#757575',
    height: '24px',
    width: '24px',
  };
  render() {
    return (
      <svg fill={this.props.fill} width={this.props.width} height={this.props.height} viewBox='0 0 24 24'>
        <path d="M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z"/> 
      </svg>
    );
  }
};