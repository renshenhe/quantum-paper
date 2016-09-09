import React, { PureComponent } from 'react';
import { storiesOf } from '@kadira/storybook';
import ProgressBar from '../ProgressBar';
import Prototype from '../ProgressBarProto';

import BufferingProgress from '../examples/BufferingProgress';
import InputErrorTest from '../examples/InputErrorTest';

storiesOf('Progress Bar')
  .add('Indeterminate', () => (
    <ProgressBar />
  )
)
  .add('Buffering', () => (
    // <ProgressBar type='buffer' progress={33} buffer={87} />
    <BufferingProgress />
  ))
  .add('Input Error Test', () => <InputErrorTest />)
  .add('Prototype', () => <Prototype />)