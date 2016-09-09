/* @flow */

import React, { PureComponent } from 'react';
import TextField from '../TextField';

export default class Example extends PureComponent {
  render() {
    return (
    <TextField
      floatingLabel={true}
      fontColor='red',
      error={true}
      errorMessage='An input is required'
    />
    );
  }
};