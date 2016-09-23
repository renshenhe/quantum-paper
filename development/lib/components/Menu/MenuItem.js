/* @flow */

import React, { Component } from 'react';
import Ripple from '../Ripple/Ripple';

type Props = {
  label?: string;
};

type State = {
  active: bool;
  hovered: bool;
  pressed: bool;
};

// min width on mobile = 2 * 56 = 112
// max width on mobile = 5 * 56 = 280

function getStyles(props: Props, state: State) {
  const {
    active,
    hovered,
    pressed,
  } = state;
  const { leftSpacing } = props;
  const styles = {
    container: {
      minWidth: '112px',
      maxWidth: '280px',
      backgroundColor:  pressed ? 'rgba(0, 0, 0, 0.4)' : hovered ? 'rgba(0, 0, 0, 0.12)' : '#FFF',
      height: '48px',
      padding: '16px',
      fontFamily: 'Roboto',
      boxSizing: 'border-box',
      cursor: 'pointer',
      fontFamily: 'Roboto',
      lineHeight: '16px',
      position: 'relative',
      paddingLeft: leftSpacing,      
    },
    rippleContainer: {
      position: 'absolute',
      top: '0px',
      left: '0px',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
    },
  }

  return styles;
}
type Handler = () => void;
export default class MenuItem extends Component {
  static defaultProps = {
    leftSpacing: '16px',
  }
  state: State = {
    active: false,
    hovered: false,
    pressed: false,
  };

  handleMouseEnter: Handler = () => {
    this.setState({ hovered: true })
  };
  handleMouseLeave: Handler = () => {
    this.setState({ hovered: false })
  };
  onMouseDown: Handler = () => {
    this.setState({ pressed: true })
  };
  onMouseUp: Handler = () => {
    this.setState({ pressed: false })
  };
  handleClick: Handler = (e) => {
    if (this.props.onClick) {
      this.props.onClick(e);
    };
    if (this.props.closeMenu) {
      this.props.closeMenu();
    }
  }
  render() {
    const { label } = this.props;

    const style = getStyles(this.props, this.state)
    return (
      <div 
        style={style.container}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onMouseUp={this.onMouseUp}
        onMouseDown={this.onMouseDown}
        onClick={this.handleClick}
      >
        { label }
        <div style={style.rippleContainer}>
          <Ripple />
        </div>
      </div>
    );
  }
};