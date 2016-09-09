/* @flow */

import React, { Component } from 'react';
import ProgressBar from '../ProgressBar';

export default class BufferingProgress extends Component {
  state = {
    value: '',
    buffer: 0,
  };
  handleChange = (e) => {
    // let i = e.target.value;
    console.log('handleChange', e.target.value)
    this.setState({ value: e.target.value }, () => console.log('this is from bufferingprogress', this.state.value))
  };
  render() {
    return (
      <div>
        <input 
          type='number'
          value={this.state.value} 
          onChange={this.handleChange}
          style={{ marginBottom: '20px' }}
          />
        <ProgressBar type='buffer' progress={this.state.value} buffer={50} />
      </div>
    );
  }
};