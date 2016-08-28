/* @flow */

import React, { Component } from 'react';

type Handler = (e?: any) => void;
type Props = {
};

function getStyles(props): Object {
  const {
    dense,
    color,
    onClick,
  } = props;

  const iconSize = dense ? 24 : 24; // Needs customization consideriation
  const svgSize = dense ? 40 : 48;
  const size = `${svgSize}px`;
  const styles = {
    container: {
      width: size,
      height: size,
      display: 'inline-block',
      padding: dense ? '10px' : '12px',
      boxSizing: 'border-box',
      cursor: onClick && 'pointer',
    },
    svg: {
      fill: 'rgba(0, 0, 0, 0.54)',
      verticalAlign: 'top',
    },
    viewBox: `0 0 ${iconSize} ${iconSize}`,
  }

  return styles;
}


export default class Icon extends Component {

  handleClick: Handler = (e: any) => {
    e.preventDefault();

    console.log('icon clicked')
  };
  render() {
    const style = getStyles(this.props);
    return (
      <div 
        style={style.container}
        onClick={this.handleClick}
      >
      <svg style={style.svg} viewBox={style.viewBox}>
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/>
      </svg>
      </div>
    );
  }
};