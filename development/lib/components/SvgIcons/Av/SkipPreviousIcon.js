/* @flow */

import React, { PureComponent } from 'react';

export default class SkipPreviousIcon extends PureComponent {
  static defaultProps = {
    fill: '#757575',
    height: '24px',
    width: '24px',
  };
  render() {
    return (
      <svg fill={this.props.fill} width={this.props.width} height={this.props.height} viewBox='0 0 24 24'>
        <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/> 
      </svg>
    );
  }
};