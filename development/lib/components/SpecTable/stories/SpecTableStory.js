import React, { PureComponent } from 'react';
import { storiesOf } from '@kadira/storybook';
import SpecTableExample from '../examples/SpecTableExample';

storiesOf('SpecTable')
  .add('Default Spec', () => (
    <SpecTableExample />
  )
) 