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
          left={0}
          labelPosition='left'
          bars='segment'
          mask={1}
          maskPaddingLeft={8}
          maskPaddingRight={8}

        />
        <Ruler
          height={rect.height >= 48 ? 36 : 32}
          top={paddingTop}
          right={0}
          labelPosition='right'

        />
        <Ruler
          width={16}
          left={0}
          top={0}
          labelPosition='top'

        />
        <Ruler
          width={16}
          right={0}
          top={0}
          labelPosition='top'
        
        />
        <Ruler
          width={16}
          right={0}
          bottom={0}
          labelPosition='bottom'
          mask={1}
          bars='segment'
          maskPaddingTop={6}
          maskPaddingBottom={6}
        />
      </div>
    );
  }
};
