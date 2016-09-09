/* @flow */

import React, { PureComponent } from 'react';

export default class NumberDisplayComponent extends PureComponent {
  componentDidMount() {
    let el = this.props.value
    console.log(el);
  }
  render() {
    return(<div style={{ fontSize: '16px' }}>{this.props.value}</div>)
  }
}
