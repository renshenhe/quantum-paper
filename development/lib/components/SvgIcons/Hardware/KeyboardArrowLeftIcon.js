/* @flow */

import React, { PureComponent } from 'react';

export default class KeyboardArrowLeftIcon extends PureComponent {
  static defaultProps = {
    fill: '#757575',
    height: '24px',
    width: '24px',
  };
  render() {
    return (
      <svg fill={this.props.fill} width={this.props.width} height={this.props.height} viewBox='0 0 24 24'>
        <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/> 
      </svg>
    );
  }
};