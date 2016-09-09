/* @flow */

import React, { PureComponent } from 'react';

export default class SpaceBarIcon extends PureComponent {
  static defaultProps = {
    fill: '#757575',
    height: '24px',
    width: '24px',
  };
  render() {
    return (
      <svg fill={this.props.fill} width={this.props.width} height={this.props.height} viewBox='0 0 24 24'>
        <path d="M18 9v4H6V9H4v6h16V9z"/> 
      </svg>
    );
  }
};