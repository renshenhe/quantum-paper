import React, { PureComponent } from 'react';
import IconButton from '../IconButton';
import { withMeasurements } from '../../../Measure/Measure';
import IconButtonMeasurements from './IconButtonMeasurements';
import CloudDownload from '../testSvg/CloudDownload';

class DefaultIconButton extends PureComponent {
  handleClick = () => {
    console.log('MeasuredIconButton has been clicked')
  };
  render() {
    return (
      <IconButton onClick={this.handleClick}>
        <CloudDownload />
      </IconButton>
    );
  }
};
class DefaultIconButtonDense extends PureComponent {
  handleClick = () => {
    console.log('MeasuredIconButtonDense has been clicked')
  };
  render() {
    return (
      <IconButton
        dense={true} 
        onClick={this.handleClick}>
        <CloudDownload
          dense={true}
        />
      </IconButton>
    );
  }
};

const normalCaption = ['Icon: 24dp', 'Touch target: 48dp'];
const denseCaption = ['Icon: 20dp', 'Touch target: 40dp'];
const MeasuredIconButton = withMeasurements(DefaultIconButton)(IconButtonMeasurements, 'Normal Icon', normalCaption)
const MeasuredIconButtonDense = withMeasurements(DefaultIconButtonDense)(IconButtonMeasurements, 'Dense Icon', denseCaption, { dense: true })

export default class DefaultButtonContainer extends PureComponent {
  render() {
    return(
      <div>
        <MeasuredIconButton />
        <MeasuredIconButtonDense />

      </div>
    );
  }
}