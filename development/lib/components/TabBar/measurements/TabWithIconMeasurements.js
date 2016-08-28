/* @flow */

import React, { PureComponent } from 'react';
import Ruler from '../../Ruler/Ruler';

export default class TabWithIconMeasurements extends PureComponent {
  render() {
    const { rect } = this.props;
    const halfWidth = (rect.width - 16) / 2;
    const iconPosition = (rect.width - 48) / 2;
    return (
      <div>
        <Ruler
          width={rect.width}
          top={-18}
          labelPosition='top'
        />
        <Ruler
          height={rect.height}
          labelPosition='top'
          left={-18}
        />
        <Ruler
          height={10}
          bottom={30}
          barHeight={rect.width}
          labelPosition='right'
          right={0}
          marker={1}
          bars='none'
        />
        <Ruler
          height={16}
          bottom={0}
          labelPosition='bottom'
          left={124}
        />
      </div>
    );
  }
};