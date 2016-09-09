/* @flow */

import React, { PureComponent } from 'react';

export default class FormatQuoteIcon extends PureComponent {
  static defaultProps = {
    fill: '#757575',
    height: '24px',
    width: '24px',
  };
  render() {
    return (
      <svg fill={this.props.fill} width={this.props.width} height={this.props.height} viewBox='0 0 24 24'>
        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/> 
      </svg>
    );
  }
};