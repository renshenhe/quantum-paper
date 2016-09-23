/* @flow */

import React, { PureComponent } from 'react';

export default class DemoItem extends PureComponent {
  render() {
    return (
      <div style={{
        color: '#a2a2a2',
        fontSize: '12px',
        fontWeight: '400',
        display: 'flex',
        flexWrap: 'nowrap',
        fontFamily: 'Roboto',
      }}>
        <div
          style={{
            paddingRight: '72px',
          }}
        >{ this.props.label }</div>
        <div>{ this.props.children }</div>
      </div>
    );
  }
};