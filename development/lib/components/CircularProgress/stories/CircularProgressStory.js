import React from 'react';
import { storiesOf } from '@kadira/storybook';
import CircularProgress from '../CircularProgress';
import Spinner from '../Spinner';

storiesOf('Circular Progress')
  .add('Default Progress', () =>(
    <CircularProgress
      indeterminate={true}
    />
  ))
  .add('Prototype', () => <Spinner />)