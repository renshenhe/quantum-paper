/* @flow */

import React, { PureComponent } from 'react';
import Ruler from '../../Ruler/Ruler';

export default class TabBarMeasurements extends PureComponent {
  render() {
    return (
      <div>
        <Ruler
          height={this.props.rect.height}
          labelPosition='left'
          left={-18}
        />
        <Ruler
          width={this.props.rect.width}
          labelPosition='top'
          top={-18}
        />
      </div>
    );
  }
};