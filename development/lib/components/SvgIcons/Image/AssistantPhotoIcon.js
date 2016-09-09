/* @flow */

import React, { PureComponent } from 'react';

export default class AssistantPhotoIcon extends PureComponent {
  static defaultProps = {
    fill: '#757575',
    height: '24px',
    width: '24px',
  };
  render() {
    return (
      <svg fill={this.props.fill} width={this.props.width} height={this.props.height} viewBox='0 0 24 24'>
        <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/> 
      </svg>
    );
  }
};