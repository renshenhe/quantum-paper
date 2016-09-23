/* @flow */

import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

import Button from '../../Button/Button';
import Ruler from '../Ruler';

export default class Example extends PureComponent {
  state = {
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  };

  componentDidMount() {
    // const shape = ReactDOM.findDOMNode(this.buttonRef).getBoundingClientRect();
    // console.log(shape);
    const { width, height, top, left, right, bottom } = ReactDOM.findDOMNode(this.buttonRef).getBoundingClientRect();
    this.setState({
      width,
      height,
      top,
      left,
      right,
      bottom
    });
    console.log(ReactDOM.findDOMNode(this.buttonRef).style)
  }
  componentDidUpdate() {
    console.log(this.state);

  }
  render() {
    return (
      <div style={staticStyles.container}>
        <Button ref={r => this.buttonRef = r } />
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          backgroundColor: 'red',
          width: this.state.width,
          height: this.state.height,
        }} />
      </div>
    );
  }
};

const staticStyles = {
  container: {
    position: 'relative',
  }
}