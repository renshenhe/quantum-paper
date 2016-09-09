/* @flow */

import React, { PureComponent } from 'react';

export default class SignalWifiStatusbarNotConnected26x24pxIcon extends PureComponent {
  static defaultProps = {
    fill: '#757575',
    height: '24px',
    width: '24px',
  };
  render() {
    return (
      <svg fill={this.props.fill} width={this.props.width} height={this.props.height} viewBox='0 0 24 24'>
        <path fill-opacity=".3" d="M21 8.5c.85 0 1.64.23 2.34.62l2.24-2.79C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01 4.21-5.24c-.76-.87-1.22-2-1.22-3.25 0-2.76 2.24-5 5-5z"/><path d="M21 10c-1.93 0-3.5 1.57-3.5 3.5h1.75c0-.97.78-1.75 1.75-1.75s1.75.78 1.75 1.75c0 .48-.2.92-.51 1.24l-1.09 1.1c-.63.63-1.02 1.51-1.02 2.47v.44h1.75c0-1.31.39-1.84 1.03-2.47l.78-.8c.5-.5.82-1.2.82-1.97C24.5 11.57 22.93 10 21 10zm-.95 11.95h1.9v-1.9h-1.9v1.9z"/> 
      </svg>
    );
  }
};