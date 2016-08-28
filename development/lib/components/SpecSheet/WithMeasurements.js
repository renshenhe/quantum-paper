import React, { PureComponent } from 'react';
import { findDOMNode } from 'react-dom';
import SpecSheet from '../components/SpecSheet/SpecSheet';


export const withMeasurements = (WrappedComponent) => (Measurements, label, Caption, options) => {

  return class extends WrappedComponent {
    constructor() {
      super();

      this.state = {
        rect: {},
        paddingBottom: '',
        paddingTop: '',
        paddingLeft: '',
        paddingLeft: '',
        dense: false,
      }
    }
    componentDidMount() {
      this.rePosition();
    }
    componentWillReceiveProps() {
      console.log(this.props)
    }
    rePosition = () => {
      const el = findDOMNode(this.rect);
      let client = el.getBoundingClientRect();
      const { paddingTop, paddingLeft, paddingRight, paddingBottom } = el.style
      let pLeft = paddingLeft.replace('px', '');
      let pRight = paddingRight.replace('px', '');
      let pTop = paddingTop.replace('px', '');
      let pBottom = paddingBottom.replace('px', '');
      this.setState({ 
        rect: client, 
        paddingBottom: pBottom, 
        paddingRight: pRight, 
        paddingLeft: pLeft, 
        paddingTop: pTop,
        ...options,
      })
    };
    render() {
      const { rect, paddingBottom, paddingLeft, paddingRight, paddingTop } = this.state;
      return (
        <SpecSheet 
          {...this.props}
          {...this.state}
          element={
            <WrappedComponent ref={r => this.rect = r} />
          }
          label={label || ''}s
          captions={Caption || []}>
          <Measurements {...this.props} {...this.state} />
        </SpecSheet>
      );
    }
  }

}