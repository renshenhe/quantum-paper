/* @flow */

import React, { PureComponent } from 'react';
import NumberDisplayComponent from './NumberDisplayComponent';

export default class InputComponent extends PureComponent {
  state = {
    value: '',
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  };
  render() {
    return(
      <div>
        <input type='number' value={this.state.value} onChange={this.handleChange} />
        <NumberDisplayComponent value={this.state.value} />
      </div>
    )
  }
}

