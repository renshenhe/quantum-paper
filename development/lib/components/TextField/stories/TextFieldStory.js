import React, { PureComponent } from 'react';
import { storiesOf } from '@kadira/storybook';
import FloatingLabelTextField from '../examples/FloatingLabelTextFieldExample';

storiesOf('Text Field')
  .add('Floating Label Text Field', () => (
    <FloatingLabelTextField />
  )
)