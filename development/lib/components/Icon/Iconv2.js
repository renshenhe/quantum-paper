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
  // const icon = `${iconSize}px`
  const styles = {
    container: {
      width: size,
      height: size,
      display: 'inline-block',
      // position: 'absolute',
      // top: '0px',
      // left: '0px',
      // textAlign: 'center',
      // verticalAlign: 'middle',
      padding: dense ? '10px' : '12px',
      boxSizing: 'border-box',
      cursor: onClick && 'pointer',
    },
    svg: {
      fill: 'rgba(0, 0, 0, 0.54)',
      // height: icon,
      // width: icon,
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
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
          </svg>      
      </div>
    );
  }
};