/* @flow */

import React, { PureComponent } from 'react';
import { SpecSheet, SpecTitle, SpecHeader, SpecBulletList } from '../../SpecSheet/SpecComponents';

export default class TabsWithIconOnlySpecs extends PureComponent {
  render() {
    return (
      <SpecSheet>
        <SpecTitle>
          Tabs with Icons only
        </SpecTitle>
        <SpecHeader>Height</SpecHeader>
        <SpecBulletList items={['48dp']} />
        <SpecHeader>Icon</SpecHeader>
        <SpecBulletList items={['24 x 24dp']} />
        <SpecHeader>Content alignment</SpecHeader>
        <SpecBulletList items={['Icon is centered horizontally and vertically in the tab']} />
        <SpecHeader>Padding</SpecHeader>
        <SpecBulletList items={['12dp under icon']} />        
      </SpecSheet>
    );
  }
};