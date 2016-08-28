import React, { PureComponent } from 'react';
import Switch from '../Switch';
import { withMeasurements } from '../../../Measure/Measure';

class NormalSwitch extends PureComponent {
  state = {
    toggled: false,
  };

  handleToggle = () => {
    this.setState({ toggled: !this.state.toggled })
  };
  render() {
    return (
      <Switch 
        toggled={this.state.toggled}
        onClick={this.handleToggle}
      />
    );
  }
};

export default class DefaultSwitch extends PureComponent {
  render() {
    return (
      <NormalSwitch />
    );
  }
}