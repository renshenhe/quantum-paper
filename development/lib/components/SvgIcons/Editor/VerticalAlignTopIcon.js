/* @flow */

import React, { PureComponent } from 'react';

export default class VerticalAlignTopIcon extends PureComponent {
  static defaultProps = {
    fill: '#757575',
    height: '24px',
    width: '24px',
  };
  render() {
    return (
      <svg fill={this.props.fill} width={this.props.width} height={this.props.height} viewBox='0 0 24 24'>
        <path d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"/> 
      </svg>
    );
  }
};