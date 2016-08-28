
import React, { PureComponent } from 'react';
import Ruler from '../../Ruler/rulerv1';

export default class MenuItemMeasurements extends PureComponent {
  render() {
    const { rect, dense, icon, deletable } = this.props;
    return (
      <div>
        <Ruler
          width={rect.width}
          position='top'
          horizontal='top'
          top={0}
          left={0}
        />
        <Ruler
          height={rect.height}
          position='right'
          vertical='right'
          top={0}
          right={0}
        />
        <Ruler
          width={16}
          position='left'
          horizontal='bottom'
          bottom={0}
          left={0}
          marker={2}
        />
        <Ruler
          height={20}
          position='bottom'
          horizontal='bottom'
          bottom={0}
          left={48}
        />
      </div>
    );
  }
};  