/* @flow */

import React, { PureComponent } from 'react';

export default class DragHandleIcon extends PureComponent {
  static defaultProps = {
    fill: '#757575',
    height: '24px',
    width: '24px',
  };
  render() {
    return (
      <svg fill={this.props.fill} width={this.props.width} height={this.props.height} viewBox='0 0 24 24'>
        <path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z"/> 
      </svg>
    );
  }
};