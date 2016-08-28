import React, { PureComponent } from 'react';
import Ruler from '../../Ruler/rulerv1';

export default class TooltipMeasurements extends PureComponent {
  constructor(props, state) {
    super(props, state);
  }
  render() {
    const { paddingLeft, paddingTop, paddingRight, rect, dense } = this.props;
    return (
      <div>
        <Ruler
          height={dense ? 22 : 32}
          position='bottom'
          horizontal='bottom'
          top={paddingTop}
          left={0}
        />
        <Ruler
          width={dense ? 8 : 16}
          position='bottom'
          horizontal='bottom'
          bottom={0}
          left={0}
        />
        <Ruler
          width={dense ? 8 : 16}
          position='bottom'
          horizontal='bottom'
          bottom={0}
          right={0}
        />
      </div>
    );
  }
};
