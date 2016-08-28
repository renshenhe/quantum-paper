import React, { PureComponent } from 'react';
import Button from '../Button';
import { withMeasurements } from '../../../hoc/Measure';
import DefaultButtonMeasurements from './DefaultButtonMeasurements';

class DefaultButton extends PureComponent {
  render() {
    return (
      <Button 
        primaryColor='#2196f3'
        label='normal'
        textColor='#FFF'
         />
    );
  }
};

class DefaultButtonDense extends PureComponent {
  render() {
    return (
      <Button 
        primaryColor='#2196f3' 
        label='dense'
        textColor='#FFF'
        dense={true}
         />
    )
  }
}
const MeasuredButton = withMeasurements(DefaultButton)(DefaultButtonMeasurements);
const MeasuredButtonDense = withMeasurements(DefaultButtonDense)(DefaultButtonMeasurements);
export default class DefaultButtonContainer extends PureComponent {
  render() {
    return(
      <div>
        <MeasuredButton />
        <MeasuredButtonDense />
      </div>
    );
  }
}