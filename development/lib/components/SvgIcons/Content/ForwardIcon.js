/* @flow */

import React, { PureComponent } from 'react';

export default class ForwardIcon extends PureComponent {
  static defaultProps = {
    fill: '#757575',
    height: '24px',
    width: '24px',
  };
  render() {
    return (
      <svg fill={this.props.fill} width={this.props.width} height={this.props.height} viewBox='0 0 24 24'>
        <path d="M12 8V4l8 8-8 8v-4H4V8z"/> 
      </svg>
    );
  }
};