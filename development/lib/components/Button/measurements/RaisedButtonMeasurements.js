
import React, { PureComponent } from 'react';
import Ruler from '../../Ruler/Ruler';

export default class ButtonMeasurements extends PureComponent {
  constructor(props, state) {
    super(props, state);
  }
  render() {
    const { paddingLeft, paddingTop, paddingRight, rect } = this.props;
    return (
      <div>
        <Ruler
          width={88}
          position='top'
          horizontal='top'
          top={0}
          left={paddingLeft}
        />
        <Ruler
          height={36}
          position='top'
          horizontal='top'
          top={paddingTop}
          left={0}
        />
        <Ruler
          width={16}
          position='bottom'
          horizontal='bottom'
          bottom={0}
          left={paddingLeft}
        />
        <Ruler
          width={16}
          position='bottom'
          horizontal='bottom'
          bottom={0}
          right={paddingRight}
        />
      </div>
    );
  }
};
