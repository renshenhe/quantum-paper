
import React, { PureComponent } from 'react';
import Ruler from '../../Ruler/rulerv1';

export default class IconButtonMeasurements extends PureComponent {
  render() {
    const { rect, dense } = this.props;
    return (
      <div>
        <Ruler
          height={rect.height}
          position='bottom'
          horizontal='bottom'
          top={0}
          left={0}
          marker={2}
        />
        <Ruler
          height={dense ? 20 : 24}
          position='right'
          vertical='right'
          top={dense ? 10 : 12}
          right={0}
          marker={1}
        />
      </div>
    );
  }
};  