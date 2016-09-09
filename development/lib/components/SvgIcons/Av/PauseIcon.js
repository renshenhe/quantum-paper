/* @flow */

import React, { PureComponent } from 'react';

export default class PauseIcon extends PureComponent {
  static defaultProps = {
    fill: '#757575',
    height: '24px',
    width: '24px',
  };
  render() {
    return (
      <svg fill={this.props.fill} width={this.props.width} height={this.props.height} viewBox='0 0 24 24'>
        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/> 
      </svg>
    );
  }
};