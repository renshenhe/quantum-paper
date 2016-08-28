/* @flow */

import React, { PureComponent } from 'react';

function getStyles(props, state) {
  const {
    checked,
  } = props;
  const styles = {
    container: {
      padding: '12px',
      boxSizing: 'border-box',
      width: '48px',
      height: '48px',
      display: 'inline-block',
      cursor: 'pointer',
      position: 'relative',
      zIndex: '10',
      verticalAlign: 'top',
    },
    outline: {
      fill: checked ? 'rgb(63, 81, 181)' : 'rgba(0, 0, 0, 0.54)',
      transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'absolute',
      width: '24px',
      height: '24px',
    },
    tick: {
      position: 'absolute',
      width: '24px',
      height: '24px',

      fill: 'rgb(63, 81, 181)',
      willChange: 'transform',
      transition: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1)',
      transform: `scale(${checked ? 1 : 0})`,  
      // tranform: 'scale(1)'
      scale: checked ? 1 : 0,
    } 

  }

  return styles;
}

// type State = {
//   active: bool
// };
export default class Checkbox extends PureComponent {
  // state: State = {
  //   active: false
  // };
  handleClick = (e) => {
    // this.setState({ active: !this.state.active })
    if (this.props.onClick) {
      this.props.onClick(e)
    };

  };
  animationStarted = (e) => {
    console.log(e)
  };
  render() {
    const style = getStyles(this.props, this.state)
    return (
      <div 
        style={style.container}
        onClick={this.handleClick}
      >
        <svg style={style.outline}>
          <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
        {
          this.props.checked &&
          <svg style={style.tick}>
            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        }
      </div>
    );
  }
};