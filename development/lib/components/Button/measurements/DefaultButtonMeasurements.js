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
          height={rect.height >= 48 ? 36 : 32}
          top={paddingTop}
          left={-16}
          labelPosition='left'
          marker={1}

        />
        <Ruler
          height={rect.height >= 48 ? 36 : 32}
          top={paddingTop}
          right={-16}
          labelPosition='right'

        />
        <Ruler
          width={16}
          left={8}
          top={-16}
          labelPosition='top'

        />
        <Ruler
          width={16}
          right={8}
          top={-16}
          labelPosition='top'
        
        />
        <Ruler
          width={16}
          right={8}
          bottom={-16}
          labelPosition='bottom'
          marker={1}
        
        />
      </div>
    );
  }
};
