/* @flow */

import React, { PureComponent } from 'react';

export default class SignalWifiStatusbar3Bar26x24pxIcon extends PureComponent {
  static defaultProps = {
    fill: '#757575',
    height: '24px',
    width: '24px',
  };
  render() {
    return (
      <svg fill={this.props.fill} width={this.props.width} height={this.props.height} viewBox='0 0 24 24'>
        <path d="M13.01 21.99l9.43-11.75C22.07 9.97 18.44 7 13 7c-5.44 0-9.07 2.97-9.44 3.24l9.43 11.75h.02z"/><path fill-opacity=".3" d="M13.01 21.99L25.58 6.32C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01z"/> 
      </svg>
    );
  }
};