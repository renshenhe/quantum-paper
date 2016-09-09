/* @flow */

import React, { PureComponent } from 'react';

export default class CallMadeIcon extends PureComponent {
  static defaultProps = {
    fill: '#757575',
    height: '24px',
    width: '24px',
  };
  render() {
    return (
      <svg fill={this.props.fill} width={this.props.width} height={this.props.height} viewBox='0 0 24 24'>
        <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z"/> 
      </svg>
    );
  }
};