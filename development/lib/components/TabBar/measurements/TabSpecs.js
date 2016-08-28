/* @flow */

import React from 'react';


import specStyles from '../../SpecSheet/specStyles';
import { SpecHeader, SpecBulletList, SpecTitle } from '../../SpecSheet/SpecComponents';
const { title, container, spec, bulletList, bulletListItem } = specStyles;

export const TabsWithIconsAndTextSpec = () => (
  <div style={container} >
    <SpecTitle>
      Tabs with icons and text
    </SpecTitle>
    <SpecHeader>
      Height
    </SpecHeader>
    <SpecBulletList items={['72dp']} />
    <SpecHeader>
      Icon
    </SpecHeader>
    <SpecBulletList items={['48dp']} />
    <SpecHeader>
      Icon
    </SpecHeader>
    <SpecBulletList items={['24 x 24dp']} />
    <SpecHeader>
      Content alignment
    </SpecHeader>
    <SpecBulletList items={['text and icon are centered horizontally in the tab']} />
    <SpecHeader>
      Padding
    </SpecHeader>
    <SpecBulletList items={['10dp between icon and text', '16dp under text']} />
  </div>
);
