import React from 'react';
import { storiesOf } from '@kadira/storybook';
import TabBar from '../TabBar';
import Tab from '../Tab';
import TabBarMeasured from '../measurements/TabBarMeasured';
import TabWithIconOnlyMeasured from '../measurements/TabWithIconOnlyMeasured';

storiesOf('SnackBar')
  .add('Default SnackBar', () =>(
    <TabBarMeasured />
  ))
  .add('Tabs with icons only', () => <TabWithIconOnlyMeasured />)