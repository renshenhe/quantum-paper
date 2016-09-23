import React, { PureComponent } from 'react';
import Ruler from '../Ruler/rulerv1';

export default class ButtonMeasurements extends PureComponent {
  constructor(props, state) {
    super(props, state);
  }
  render() {
    const { paddingLeft, paddingTop, paddingRight, rect } = this.props;
    return (
      <div>
        <Ruler
          height={rect.height >= 48 ? 36 : 32}
          position='bottom'
          horizontal='bottom'
          top={paddingTop}
          left={0}
        />
        <Ruler
          width={16}
          position='bottom'
          horizontal='bottom'
          bottom={0}
          maskHeight='36px'
          
          left={paddingLeft}
        />
        <Ruler
          width={16}
          position='bottom'
          horizontal='bottom'
          bottom={0}
          maskHeight='36px'
          right={paddingRight}
        />
      </div>
    );
  }
};
