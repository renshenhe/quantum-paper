/* @flow */

import React, { PureComponent } from 'react';
import Ripple from '../Animations/Ripple';

type Handler = (e?: any) => void;

type Props = {
  primaryColor?: string;
  textColor?: string;
  rippleColor?: string;
  disabled?: bool;
  label?: any;
  dense?: bool;
  onClick: Handler;
};
type State = {
  pressed: bool;
  hovered: bool;
  focused: bool;
};

type handleClick = (e: any) => void;
type handleMouseUp = (e: any) => void;
type handleMouseDown = (e: any) => void;

function getStyles(props: Props, state: State, context: any) {
  const {
    primaryColor,
    textColor,
    rippleColor,
    disabled,
    label,
    raised,
    dense,
    disabledTextColor,
    disabledColor,
  } = props;
  const {
    pressed,
    hovered,
    focused,
  } = state;

  const elevation = !disabled && ((pressed && !disabled) 
    ? '0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)'
    : '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)');

  const styles = {
    container: {
      padding: '6px 8px',
      position: 'relative',
      display: 'inline-block',
      boxSizing: 'border-box',
    },
    button: {
      background: disabled ? disabledColor : primaryColor,
      borderRadius: '2px',
      minWidth: raised ? '88px' : '64px',
      overflow: 'hidden',
      willChange: 'box-shadow, transform',
      transition: 'box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: disabled ? 'default' : 'pointer',
      height: dense ? '32px' : '36px',
      fontSize: dense ? '13px' : '14px',
      padding: '0px 8px',
      boxShadow: raised && elevation,
      //
      fontFamily: 'Roboto',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: disabled ? disabledTextColor : textColor,
      fontWeight: '500',
      textTransform: 'uppercase',
      lineHeight: '1',
      letterSpacing: '0px',
      lineHeight: dense ? '32px' : '36px',
      // opacity: disabled && disabledText
    },
    rippleContainer: {
      position: 'absolute',
      borderRadius: '2px',
      top: '0px',
      left: '0px',
      width: '100%',
      height: '100%',
      // backgroundColor: focused && (dark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)'),
      // transition: 'background-color 200ms cubic-bezier(0.4, 0, 0.2, 1)', 
      // backgroundColor: 'rgba(0, 0, 0, 0.32)',
    },
  }
  return styles;
}

export default class Button extends PureComponent {
  static defaultProps = {
    disabledTextColor: 'rgba(0, 0, 0, 0.26)',
    textColor: 'rgba(0, 0, 0, 0.87)',
    primaryColor: 'transparent',
    disabledColor: 'rgba(0, 0, 0, 0.12)',
    rippleColor: 'rgba(0, 0, 0, 0.12)',
    label: 'button',
  };
  // props: Props;
  state: State = {
    pressed: false,
    focused: false,
    hovered: false,
  };

  handleMouseDown: Handler = (e: any) => {
    e.preventDefault()
    this.setState({ pressed: true })
  };
  handleMouseUp: Handler = (e: any) => {
    // e.preventDefault()

    this.setState({ pressed: false })
  };
  handleMouseOver: Handler = (e: any) => {
    this.setState({ focused: true })
  };
  handleMouseOut: Handler = (e: any) => {
    this.setState({ focused: false })
  };
  handleClick: Handler = (e: any) => {
    // e.preventDefault();
    if (!this.props.disabled && this.props.onClick) {
      this.props.onClick(e)
    }
  };
  render() {
    const { label, disabled, rippleColor } = this.props;
    const style = getStyles(this.props, this.state)
    return (
      <div style={style.container} >
        <div 
          style={style.button}
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
          onClick={this.handleClick}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          >
          <span style={style.text}>
          {label}
          </span>
          {
            !disabled &&
            <div style={style.rippleContainer}>
              <Ripple color={rippleColor} />
            </div>
            
          }
        </div>
                 
      </div>
    );
  }
};