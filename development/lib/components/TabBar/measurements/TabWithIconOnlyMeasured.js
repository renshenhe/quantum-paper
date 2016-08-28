/* @flow */

import React, { PureComponent } from 'react';
import Tab from '../Tab';
import { withMeasurements } from '../../../hoc/Measure';
import TabWithIconOnlySpec from '../specs/TabWithIconOnlySpec';
import CloudDownload from '../../Icon/testSvg/CloudDownload';
import TabWithIconOnlyMeasurements from './TabWithIconOnlyMeasurements';
import ContainerRuler from '../../Ruler/ContainerRuler';

class TabWithIconOnly extends PureComponent {
  render() {
    return (
      <Tab
        icon={
          <ContainerRuler
            measure='height'
          >
            <CloudDownload />
          </ContainerRuler>
        }
      />
    );
  }
};

const TabWithIconOnlyWithMeasurements = withMeasurements(TabWithIconOnly)(TabWithIconOnlyMeasurements,null,
  <TabWithIconOnlySpec />
);

export default class TabWithIconOnlyMeasured extends PureComponent {
  render() {
    return (
      <TabWithIconOnlyWithMeasurements />
    );
  }
};