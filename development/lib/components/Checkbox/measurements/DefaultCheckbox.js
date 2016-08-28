import React, { PureComponent } from 'react';
import Checkbox from '../Checkbox';
import { withMeasurements } from '../../../Measure/Measure';
// import CheckboxMeasurements from './CheckboxMeasurements';
import CssCheckbox from '../CssCheckbox';

class NormalCheckbox extends PureComponent {
  constructor() {
    super();

    this.state = {
      checked: false,
    };
  }
  handleClick = () => {
    this.setState({ checked: !this.state.checked })
  };
  render() {
    return (
      <Checkbox 
        checked={this.state.checked}
        onClick={this.handleClick}
      />
    );
  }
};

class CssCheckboxContainer extends PureComponent {
  constructor() {
    super();

    this.state = {
      checked: false
    };
  }
  handleClick = () => {
    this.setState({ checked: !this.state.checked })
  };

  render() {
    return (
      <CssCheckbox
        checked={this.state.checked}
        onClick={this.handleClick}
      />
    );
  }
}

export default class DefaultCheckbox extends PureComponent {
  render() {
    return (
      <div>
        <NormalCheckbox />
        <CssCheckboxContainer />
      </div>
    );
  }
}