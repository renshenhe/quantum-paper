import React, { PureComponent } from 'react';
import { withMeasurements } from '../../../Measure/Measure';
import MenuItem from '../MenuItem';
import Menu from '../Menu';

import MenuItemMeasurements from './MenuItemMeasurements';

class DefaultMenuItem extends PureComponent {
  render() {
    return (
      <MenuItem
        label='Maps'
      />
    );
  }
};
class MenuWithItems extends PureComponent {
  render() {
    return (
      <div>
        <Menu

        >
          <MenuItem label='Maps' />
          <MenuItem label='Books' />
          <MenuItem label='Flights' />
          <MenuItem label='Apps' />

        </Menu>
      <Menu
        minWidth='168px'
        >
          <MenuItem label='Refresh' />
          <MenuItem label='Help & feedback' />
          <MenuItem label='Settings' />
          <MenuItem label='Sign out' />

        </Menu>
      </div>
    );
  }
};
// class DeletableChipIcon extends PureComponent {
//   render() {
//     return (
//       <Chip
//         label='Example Chip'
//         deletable={true}
//         icon={<TestIcon />}
//       />
//     );
//   }
// };

const MenuItemWithMeasurements = withMeasurements(DefaultMenuItem)(MenuItemMeasurements)
export default class MenuItemMeasured extends PureComponent {
  render() {
    return (
      <div>
        <MenuItemWithMeasurements />
      </div>
    );
  }
};