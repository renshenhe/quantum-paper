/* @flow */

import React, { PureComponent } from 'react';
import Ruler from '../../Ruler/Ruler';

export default class TabWithIconOnlyMeasured extends PureComponent {
  render() {
    return (
      <div>
        <Ruler
          height={12}
          labelPosition='right'
          bottom={0}
          marker={1}
          bars='none'
          right={0}
          barHeight={this.props.rect.width}
        />
        <Ruler
          height={this.props.rect.height}
          labelPosition='left'
          left={-18}
        />
      </div>
    );
  }
};  