/* @flow */

import React, { PureComponent } from 'react';

export default class FastForwardIcon extends PureComponent {
  static defaultProps = {
    fill: '#757575',
    height: '24px',
    width: '24px',
  };
  render() {
    return (
      <svg fill={this.props.fill} width={this.props.width} height={this.props.height} viewBox='0 0 24 24'>
        <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"/> 
      </svg>
    );
  }
};