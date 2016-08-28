import React, { PureComponent } from 'react';
import RadioToggle from '../RadioToggle';
import { withMeasurements } from '../../../Measure/Measure';
// import CheckboxMeasurements from './CheckboxMeasurements';

class NormalRadioButton extends PureComponent {
  state = {
    toggled: false
  };

  handleClick = () => this.setState({ toggled: !this.state.toggled });

  render() {
    return (
      <RadioToggle
        onClick={this.handleClick}
        toggled={this.state.toggled}
      />
    );
  }
}


export default class DefaultRadioButton extends PureComponent {
  render() {
    return (
      <div>
        <NormalRadioButton />
      </div>
    );
  }
};  