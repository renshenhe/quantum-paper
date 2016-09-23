/* @flow */

import React, { PureComponent } from 'react';

export default class Measurements extends PureComponent {
  render() {
    const { style, measure, children } = this.props;
    console.log(measure.getBoundingClientRect());
    return (
      <div style={{
      }}>
        { measure }      
        { children }
      </div>
    );
  }
};