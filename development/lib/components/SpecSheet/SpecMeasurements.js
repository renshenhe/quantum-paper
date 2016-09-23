/* @flow */

import React, { PureComponent } from 'react';

export default class SpecMeasurements extends PureComponent {
  render() {
    const { children, style, ...otherProps } = this.props;
    return (
      <div
        style={{
          minWidth: '360px',
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          ...style,
      }}>
        { children }
      </div>
    );
  }
};  