/* @flow */

import React, { PureComponent } from 'react';

export default class PlayArrowIcon extends PureComponent {
  static defaultProps = {
    fill: '#757575',
    height: '24px',
    width: '24px',
  };
  render() {
    return (
      <svg fill={this.props.fill} width={this.props.width} height={this.props.height} viewBox='0 0 24 24'>
        <path d="M8 5v14l11-7z"/> 
      </svg>
    );
  }
};