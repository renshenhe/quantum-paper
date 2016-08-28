import React, { PureComponent } from 'react';
import { withMeasurements } from '../../../Measure/Measure';
import TextField from '../TextField';
import FloatingLabelMeasurements from './FloatingLabelMeasurements';

class FloatingLabelTextField extends PureComponent {
  render() {
    return (
      <TextField
        floatingLabel={true}
      />
    );
  }
};
class FloatingLabelTextFieldDense extends PureComponent {
  render() {
    return (
      <TextField
        floatingLabel={true}
        dense={true}
      />
    );
  }
};

class MultiLineTextField extends PureComponent {
  render() {
    return (
      <TextField
        multiLine={true}
      />
    );
  }
}

class FullWidth extends PureComponent {
  render() {
    return (
      <TextField
        fullWidth={true}
      />
    )
  }
}

class FullWidthDense extends PureComponent {
  render() {
    return (
      <TextField
        fullWidth={true}
        dense={true}
      />
    )
  }
}
class SingleLine extends PureComponent {
  render() {
    return (
      <TextField
      />
    );
  }
};
class SingleLineDense extends PureComponent {
  render() {
    return (
      <TextField
        dense={true}
      />
    );
  }
};
const floatingLabelCaption = [
'Label height: 72dp',
'Padding above label text: 16dp',
'Padding between label and input text: 8dp',
'Padding below input text (including divider): 16dp',
'Padding below text divider: 8dp'
];
const floatingLabelDenseCaption = 
[
'Label and input text: 13sp',
'Label height: 60dp',
'Label text top padding: 12dp',
'Padding between label and input text: 4dp',
'Input text bottom padding (including divider): 12dp',
'Text divider bottom padding: 4dp'
]
const multiLine =
[
'Padding above and below label: 16dp'
]
const fullWidthCaption = [
'Height: 56dp',
'Text top and bottom padding: 20dp'
]
const Variant1 = withMeasurements(FloatingLabelTextField)(FloatingLabelMeasurements, 'Single-line text field with floating label', floatingLabelCaption, { floatingLabel: true });
const Variant2 = withMeasurements(FloatingLabelTextFieldDense)(FloatingLabelMeasurements, 'Dense single-line text field with floating label', floatingLabelDenseCaption, { floatingLabel: true, dense: true });
const Variant3 = withMeasurements(MultiLineTextField)(FloatingLabelMeasurements, 'Multi-line text field', multiLine, { multiLine: true });
const Variant4 = withMeasurements(FullWidth)(FloatingLabelMeasurements, 'Full-width single-line text field', fullWidthCaption, { fullWidth: true });
const Variant5 = withMeasurements(FullWidthDense)(FloatingLabelMeasurements, 'Dense full-width text field', null, { fullWidth: true, dense: true });
const Variant6 = withMeasurements(SingleLine)(FloatingLabelMeasurements, 'Single-line text field');
const Variant7 = withMeasurements(SingleLineDense)(FloatingLabelMeasurements, 'Dense Single-line text field', null, { dense: true });

export default class FLTextFieldContainer extends PureComponent {
  render() {
    return (
      <div>
        <Variant1 />
        <Variant2 />
        <Variant3 />
        <Variant4 />
        <Variant5 />
        <Variant6 />
        <Variant7 />

      </div>
    );
  }
}