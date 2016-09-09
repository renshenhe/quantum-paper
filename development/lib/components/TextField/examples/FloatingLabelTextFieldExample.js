/* @flow */

import React, { PureComponent } from 'react';
import TextField from '../TextField';

export default class Example extends PureComponent {
  render() {
    return (
    <TextField
      floatingLabel={true}
      multiLine={true}
    />
    );
  }
};