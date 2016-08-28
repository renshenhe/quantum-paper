import React, { PureComponent } from 'react';
import { findDOMNode } from 'react-dom';

export default class MeasuredContainer extends PureComponent {
  render() {
    return (
      <div style={style.container}>
        { this.props.children }
      </div>
    );
  }
};
