/* @flow */

import React, { PureComponent } from 'react';

export default class SkipNextIcon extends PureComponent {
  static defaultProps = {
    fill: '#757575',
    height: '24px',
    width: '24px',
  };
  render() {
    return (
      <svg fill={this.props.fill} width={this.props.width} height={this.props.height} viewBox='0 0 24 24'>
        <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/> 
      </svg>
    );
  }
};