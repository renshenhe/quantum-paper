/* @flow */

import React, { PureComponent } from 'react';

export default class AddIcon extends PureComponent {
  static defaultProps = {
    fill: '#757575',
    height: '24px',
    width: '24px',
  };
  render() {
    return (
      <svg fill={this.props.fill} width={this.props.width} height={this.props.height} viewBox='0 0 24 24'>
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/> 
      </svg>
    );
  }
};