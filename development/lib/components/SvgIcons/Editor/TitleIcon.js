/* @flow */

import React, { PureComponent } from 'react';

export default class TitleIcon extends PureComponent {
  static defaultProps = {
    fill: '#757575',
    height: '24px',
    width: '24px',
  };
  render() {
    return (
      <svg fill={this.props.fill} width={this.props.width} height={this.props.height} viewBox='0 0 24 24'>
        <path d="M5 4v3h5.5v12h3V7H19V4z"/> 
      </svg>
    );
  }
};