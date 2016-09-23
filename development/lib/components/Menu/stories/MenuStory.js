import React, { PureComponent } from 'react';
import { storiesOf } from '@kadira/storybook';
import Menu from '../Menu';
import MenuItem from '../MenuItem';
import ListItem from '../../List/ListItem';

storiesOf('Menu')
  .add('Default Menu', () => (
    <Menu>
      <MenuItem label='item one' />
      <MenuItem label='item two' />
      <MenuItem label='item three' />
      <ListItem primaryText='Menu Item Four' />
    </Menu>
  )
)