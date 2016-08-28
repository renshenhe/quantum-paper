/* @flow */

import React, { PureComponent } from 'react';
import Ruler from '../../Ruler/Ruler';

export default class TabMeasurements extends PureComponent {
  render() {
    const { rect } = this.props;
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
      </div>
    );
  }
};