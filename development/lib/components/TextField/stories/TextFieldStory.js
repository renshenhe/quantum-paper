import React, { PureComponent } from 'react';
import { storiesOf } from '@kadira/storybook';
import FloatingLabelTextField from '../examples/FloatingLabelTextFieldExample';
import FloatingLabelTextFieldMeasurements from './FloatingLabelTextFieldMeasurements';
import FloatingLabelTextFieldDemo from '../demos/FloatingLabelTextFieldDemo';

storiesOf('Text Field')
  .add('Floating Label Text Field', () => (
    <FloatingLabelTextField />
  ))
  .add('Floating Label Text Field Measurements', () => <FloatingLabelTextFieldMeasurements />)
  .add('Floating Label Text Field Demo', () => <FloatingLabelTextFieldDemo />)