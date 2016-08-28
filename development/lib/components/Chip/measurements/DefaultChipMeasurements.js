
import React, { PureComponent } from 'react';
import Ruler from '../../Ruler/rulerv1';

export default class ChipMeasurements extends PureComponent {
  render() {
    const { rect, dense, icon, deletable } = this.props;
    return (
      <div>
        <Ruler
          height={rect.height}
          position='bottom'
          horizontal='bottom'
          top={0}
          left={0}
        />
        <Ruler
          width={icon ? 8 : 12}
          position='top'
          horizonal='top'
          top={10}
          left={icon ? 32 : 0}
          marker={1}
          size={12}
        />
        <Ruler
          width={deletable ? 4 : 12}
          position='top'
          horizonal='top'
          top={10}
          right={0}
          marker={1}
          size={12}
        />
        {
          deletable &&
          <div>
          <Ruler
            width={4}
            position='top'
            horizonal='top'
            top={10}
            right={28}
            marker={1}
            size={12}
          />
          <Ruler
            width={24}
            position='bottom'
            horizontal='bottom'
            marker='rgba(0, 150, 136, .76)'
            right={4}
            size={24}
            top={4}

          />
          </div>
        }
      </div>
    );
  }
};  