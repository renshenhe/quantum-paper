/* @flow */

import React, { PureComponent } from 'react';

function renderPosition(props) {
  const { bottom, height, left, right, top, width } = props;

  let style = {
    bottom,
    height,
    left,
    right,
    top,
    width,
    position: 'absolute',
    pointerEvents: 'none',
  }
  return style
}
const Caption = ({ captions }) => (
  <div>
    {
      captions.map((caption, key) => (
        <div key={key}>{caption}</div>
      ))
    }
  </div>
)
export default class SpecSheet extends PureComponent {
  render() {
    const { captions, element, children, rect, label } = this.props;
    return (
      <div style={staticStyles.container}>
        <div style={staticStyles.element}>
          { element }
        </div>
        <div style={staticStyles.label}>
          { label }
        </div>
        <div style={staticStyles.caption}>
        { Array.isArray(captions) ? <Caption captions={captions} /> : captions }
        </div>
        <div style={renderPosition(rect)}>
        { children }
        </div>
      </div>
    );
  }
};

const staticStyles = {
  container: {
    display: 'inline-block',
    verticalAlign: 'top',
  },
  element: {
    padding: '48px',
    marginBottom: '10px',
  },
  label: {
    fontWeight: '500',
    marginBottom: '20px',
    fontFamily: 'Roboto',
    fontSize: '13px',
  },
  caption: {
    width: '360px',
    fontSize: '13px',
    lineHeight: '24px',
    color: '#616161',
    fontFamily: 'Roboto',
  }
}