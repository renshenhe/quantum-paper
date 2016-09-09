import React, { PureComponent } from 'react';
import { storiesOf } from '@kadira/storybook';
import TableExample from '../examples/TableExample';

storiesOf('Table')
  .add('Default Table', () => (
    <TableExample />
  )
)