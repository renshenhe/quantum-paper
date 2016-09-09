/* @flow */

import React, { PureComponent } from 'react';

export default class ViewStreamIcon extends PureComponent {
  static defaultProps = {
    fill: '#757575',
    height: '24px',
    width: '24px',
  };
  render() {
    return (
      <svg fill={this.props.fill} width={this.props.width} height={this.props.height} viewBox='0 0 24 24'>
        <path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z"/> 
      </svg>
    );
  }
};