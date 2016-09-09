/* @flow */

import React, { PureComponent } from 'react';

export default class NearMeIcon extends PureComponent {
  static defaultProps = {
    fill: '#757575',
    height: '24px',
    width: '24px',
  };
  render() {
    return (
      <svg fill={this.props.fill} width={this.props.width} height={this.props.height} viewBox='0 0 24 24'>
        <path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"/> 
      </svg>
    );
  }
};