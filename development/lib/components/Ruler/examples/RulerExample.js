/* @flow */

import React, { PureComponent } from 'react';
import Button from '../../Button/Button';
import Ruler from '../Ruler';
import { withMeasurements } from '../withMeasurements';
import SpecMeasurements from '../../SpecSheet/SpecMeasurements';

class Measurements extends PureComponent {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div className='measured-button'>
        <Ruler
          height={this.props.componentRect.height}
          top={0}
          left={0}
          labelPosition='left'
          bars='segment'
          mask={1}
          maskPaddingLeft={8}
          maskPaddingRight={8}

        />
        <Ruler
          height={36}
          top={0}
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


const MeasuredComponent = withMeasurements(Button)(Measurements, { padding: '48px' });
// class Example extends PureComponent {
//   render() {
//     return (
//         <MeasuredComponent />
//     );
//   }
// };
export default MeasuredComponent;