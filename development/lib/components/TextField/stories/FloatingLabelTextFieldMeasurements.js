/* @flow */

import React, { PureComponent } from 'react';
import { withMeasurements } from '../../Ruler/withMeasurements';
import Ruler from '../../Ruler/Ruler';
import TextField from '../TextField';

class TextFieldMeasurements extends PureComponent {
  render() {
    return (
      <div>
        <Ruler
          height={72}
          labelPosition='left'
          spacing={32}
          barWidth={8}
        />
        <Ruler
          height={16}
          labelPosition='left'
          mask={1}
          barWidth={8}
          maskWidth={16}
          spacing={4}
        />
        <Ruler
          height={16}
          bars='none'
          top={16}
          mask={2}
        />
        <Ruler
          height={8}
          top={32}
          bars='segment'
          labelPosition='left'
          mask={3}
          maskWidth={16}
        />
        <Ruler
          height={16}
          top={40}
          mask={2}
          bars='none'
        />
        <Ruler
          height={16}
          bottom={0}
          barWidth={8}
          spacing={4}
        />
        <Ruler
          height={8}
          bottom={0}
          bars='segment'
          labelPosition='right'
          mask={3}
          size={16}
        />
      </div>
    );
  }
};

class FloatingLabelTextField extends PureComponent {
  render() {
    return (
      <TextField
        floatingLabel={true}
      />    
    );
  }
};

export default withMeasurements(FloatingLabelTextField)(TextFieldMeasurements, { padding: '48px' });