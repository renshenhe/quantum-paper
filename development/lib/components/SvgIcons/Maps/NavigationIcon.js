/* @flow */

import React, { PureComponent } from 'react';

export default class NavigationIcon extends PureComponent {
  static defaultProps = {
    fill: '#757575',
    height: '24px',
    width: '24px',
  };
  render() {
    return (
      <svg fill={this.props.fill} width={this.props.width} height={this.props.height} viewBox='0 0 24 24'>
        <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/> 
      </svg>
    );
  }
};