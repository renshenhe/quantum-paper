/* @flow */

import React, { PureComponent } from 'react';

export default class ExpandMoreIcon extends PureComponent {
  static defaultProps = {
    fill: '#757575',
    height: '24px',
    width: '24px',
  };
  render() {
    return (
      <svg fill={this.props.fill} width={this.props.width} height={this.props.height} viewBox='0 0 24 24'>
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/> 
      </svg>
    );
  }
};