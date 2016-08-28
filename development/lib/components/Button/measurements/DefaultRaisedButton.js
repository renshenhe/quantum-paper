import React, { PureComponent } from 'react';
import Button from '../Button';
import { withMeasurements } from '../../../hoc/Measure';
import DefaultButtonMeasurements from './RaisedButtonMeasurements';

class DefaultButton extends PureComponent {
  render() {
    return (
      <Button 
        label='normal'
        raised={true} 
         />
    );
  }
};

// class DefaultButtonDense extends PureComponent {
//   render() {
//     return (
//       <Button 
//         primaryColor='#2196f3' 
//         label='dense'
//         textColor='#FFF'
//         dense={true}
//          />
//     )
//   }
// }

const raisedButtonCaption = [
'Minimum width: 88dp', 
'Height: 36dp',
'Corner radius: 2dp',
'Disabled text: 26% #000000',
'Disabled button: 12% #000000',

'Focused:12% #000000 shade over the color'
]

const MeasuredRaisedButton = withMeasurements(DefaultButton)(DefaultButtonMeasurements, 'Raised Button', raisedButtonCaption);
// const MeasuredRaisedButtonDense = withMeasurements(DefaultButtonDense)(DefaultButtonMeasurements);
export default class RaisedButtonContainer extends PureComponent {
  render() {
    return(
      <div>
        <MeasuredRaisedButton />
      </div>
    );
  }
}