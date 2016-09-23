/* @flow */

import React, { PureComponent } from 'react';
import DemoBox from '../../SpecSheet/DemoBox';
import DemoItem from '../../SpecSheet/DemoItem';

import TextField from '../TextField';

export default class Demo extends PureComponent {
  state = {
    value: 'Input tex'
  };

  onChangeHandler = (e) => {
    this.setState({ value: e.target.value })
  };
  render() {
    return (
      <DemoBox>
        <DemoItem label='Normal with hint text/label'>
        <TextField
          floatingLabel={true}
        />
        </DemoItem>
        <DemoItem label='Normal with hint text/label'>
        <TextField
          floatingLabel={true}
          value={this.state.value}
          onChange={this.onChangeHandler}
        />
        </DemoItem>
      </DemoBox>
    );
  }
};