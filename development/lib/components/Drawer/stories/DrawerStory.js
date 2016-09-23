import React, { PureComponent } from 'react';
import { storiesOf } from '@kadira/storybook';
// import Drawer from '../Drawer';
// import ListItem from '../../List/ListItem';
// import List from '../../List/List';
// import SubListItem from '../../List/SubListItem';

// import InboxIcon from '../../SvgIcons/Content/InboxIcon';
// import MailIcon from '../../SvgIcons/Content/MailIcon';
// import DraftsIcon from '../../SvgIcons/Content/DraftsIcon';
// import SendIcon from '../../SvgIcons/Content/SendIcon';

// import ArrowDropDownIcon from '../../SvgIcons/Navigation/ArrowDropDownIcon';

// import StarIcon from '../../SvgIcons/Toggle/StarIcon';
// import Divider from '../../Divider/Divider';
// import Menu from '../../Menu/Menu';
import ToggleSubMenu from './ToggleSubMenu';

storiesOf('Drawer')
  .add('Default Drawer', () => (
    <ToggleSubMenu />
  )
)