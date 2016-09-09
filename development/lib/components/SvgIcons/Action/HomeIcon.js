/* @flow */

import React, { PureComponent } from 'react';

export default class HomeIcon extends PureComponent {
  static defaultProps = {
    fill: '#757575',
    height: '24px',
    width: '24px',
  };
  render() {
    return (
      <svg fill={this.props.fill} width={this.props.width} height={this.props.height} viewBox='0 0 24 24'>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/> 
      </svg>
    );
  }
};