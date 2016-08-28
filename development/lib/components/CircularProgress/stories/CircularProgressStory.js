import React from 'react';
import { storiesOf } from '@kadira/storybook';
import CircularProgress from '../CircularProgress';

storiesOf('Circular Progress')
  .add('Default Progress', () =>(
    <CircularProgress
      indeterminate={true}
    />
  ))