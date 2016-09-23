import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import SpecMeasurements from '../SpecSheet/SpecMeasurements';

const makePixel = (num) => {
  if (typeof num === 'string') return num;

  return `${num}px`;
};

export const withMeasurements = (WrappedComponent) => (Measurements, styles) => {

  return class extends WrappedComponent {
    constructor() {
      super();

      this.state = {
        componentRect: {},
        paddingBottom: '',
        paddingTop: '',
        paddingLeft: '',
        paddingLeft: '',
      }
    }
    componentDidMount() {
      this.rePosition();
    }
    componentWillReceiveProps() {

    }
    rePosition = () => {
      const el = findDOMNode(this.rect);
      let client = el.getBoundingClientRect();
      const { paddingTop, paddingLeft, paddingRight, paddingBottom, ...otherStyles } = el.style
      let pLeft = paddingLeft.replace('px', '');
      let pRight = paddingRight.replace('px', '');
      let pTop = paddingTop.replace('px', '');
      let pBottom = paddingBottom.replace('px', '');
      this.setState({ 
        componentRect: client, 
        paddingBottom: pBottom, 
        paddingRight: pRight, 
        paddingLeft: pLeft, 
        paddingTop: pTop,
        ...otherStyles,
      })
    };
    render() {
      const { rect, paddingBottom, paddingLeft, paddingRight, paddingTop } = this.state;
      return (
        <div 
          style={{
            minWidth: '360px',
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxSizing: 'border-box',
            ...styles,
          }}
        >
          <div style={{ position: 'relative' }}>
            <WrappedComponent ref={r => this.rect = r} />
            <Measurements {...this.props} {...this.state} />
          </div>
        </div>
      );
    }
  }

}