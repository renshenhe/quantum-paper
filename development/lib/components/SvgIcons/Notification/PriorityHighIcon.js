/* @flow */

import React, { PureComponent } from 'react';

export default class PriorityHighIcon extends PureComponent {
  static defaultProps = {
    fill: '#757575',
    height: '24px',
    width: '24px',
  };
  render() {
    return (
      <svg fill={this.props.fill} width={this.props.width} height={this.props.height} viewBox='0 0 24 24'>
        <circle cx="12" cy="19" r="2"/>
        <path d="M10 3h4v12h-4z"/> 
      </svg>
    );
  }
};