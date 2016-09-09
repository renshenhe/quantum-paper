/* @flow */
import React, { PureComponent } from 'react';
import { withMeasurements } from '../../../hoc/Measure';
import TabBarMeasurements from './TabBarMeasurements';
import TabMeasurements from './TabMeasurements';
import TabWithIconMeasurements from './TabWithIconMeasurements';

import TabBar from '../TabBar';
import Tab from '../Tab';
import CloudDownload from '../../Icon/testSvg/CloudDownload';
import { TabsWithIconsAndTextSpec } from './TabSpecs';
import ContainerRuler from '../../Ruler/ContainerRuler';
import ScreenLockRotationIcon from '../../SvgIcons/Device/ScreenLockRotationIcon';
import AccessibleIcon from '../../SvgIcons/Action/AccessibleIcon';
import PhoneIcon from '../../SvgIcons/Communication/PhoneIcon';

class MeasuredTabBar extends PureComponent {
  state = {
    selected: 0,
  };
  handleClick = (selected) => {
    this.setState({ selected })
  };
  render() {
    return (
      <TabBar
        selected={this.state.selected}
      >
        <Tab value={0}
          onClick={() => this.handleClick(0)}
          icon={<PhoneIcon />}
          label='Item one' />
        <Tab value={1} 
          onClick={() => this.handleClick(1)}
          icon={<AccessibleIcon />}
        label='Item twoefaefawefwef' />

        <Tab label='Item three'
        value={2}
          icon={<ScreenLockRotationIcon />}

          onClick={() => this.handleClick(2)}

         />
      </TabBar>
    );
  }
}

class MeasuredTab extends PureComponent {
  render() {
    return (
      <Tab label='Item One' />
    );
  }
}

class MeasuredTabWithIcon extends PureComponent {
  render() {
    return (
      <Tab label='Item One'
        icon={
          <CloudDownload />

        }
      />
    )
  }
}

class MeasuredTabWithIconOnly extends PureComponent {
  render() {
    return (
      <Tab
        icon={
          <CloudDownload />

        }
      />
    )
  }
}

const TabWithMeasurements = withMeasurements(MeasuredTab)(TabMeasurements);
const TabBarWithMeasurements = withMeasurements(MeasuredTabBar)(TabBarMeasurements);
// const TabBarWithIconOnlyMeasurements = withMeasurements(MeasuredTabWithIconOnly)(TabBarMeasurements);

const TabWithIconWithMeasurements = withMeasurements(MeasuredTabWithIcon)(TabWithIconMeasurements,
  null,
  <TabsWithIconsAndTextSpec />
);

export default class TabBarMeasured extends PureComponent {

  render() {
    return (
      <div>
        <TabBarWithMeasurements />
        <TabWithMeasurements />
        <TabWithIconWithMeasurements />
      </div>
    );
  }
};