/* @flow */

import React, { PureComponent } from 'react';

type Props = {
  type?: string;
  label?: string;
  floatingLabel?: bool;
  error?: bool;
  errorTextColor?: string;
  dense?: bool;
  textColor?: string;
  floatingLabelColor?: string;
  hint?: string;
  primaryColor?: string;
  dark?: bool;
  backgroundColor?: string;
  fullWidth?: bool;
  errorMessage?: string;
  width?: string;
  multiLine?: bool;
};
type State = {
  dirty: bool;
  focused: bool;
  pressed: bool;
};

type Handler = (e?: any) => void;

function getStyles(props: Props, state: State, context): Object {
  const {
    type,
    label,
    floatingLabel,
    error,
    errorTextColor,
    dense,
    textColor,
    floatingLabelColor,
    backgroundColor,
    primaryColor,
    dark,
    fullWidth,
    multiLine,
    width,
    hint,
    errorMessage,
  } = props;
  const {
    focused,
    dirty,

  } = state;
  let paddingTop = fullWidth ? (dense ? 16 : 20) :  (dense ? 12 : 16);
  let paddingBottom = fullWidth ? (dense ? 16 : 20) : (dense ? 12 : 16);
  // if ((hint || errorMessage) && floatingLabel) {
  //   if (dense) {
  //     paddingTop = 8;
  //   } else {
  //     paddingBottom = 12;
  //     paddingTop = 8;
  //   }
  // }
  let height = '100%';

  if (dense) {
    if (fullWidth) {
      height = '48px';
    } else if (floatingLabel) {
      height = '60px';
    } else {
      height = '40px';
    }
  } else {
    if (fullWidth) {
      height = '56px';
    } else if (floatingLabel) {
      height = '72px';
    } else {
      height = '48px';
    }
  }

  if (multiLine) {
    height = '100%'
  }
  // const height = (fullWidth || multiLine) ? '100%' : (floatingLabel ? (dense ? '60px' : '72px') : (dense ? '40px' : '48px'));
  const styles = {
    container: {
      display: (fullWidth || multiLine) ? 'block' : 'inline-block',
      boxSizing: 'border-box',
    },
    textField: {
      position: 'relative',
      height: height,
      paddingTop:  !floatingLabel ? `${paddingTop}px` : `${paddingTop + (paddingBottom / 2) + (floatingLabel ? 16 : 0)}px`,
      paddingBottom: paddingBottom + 'px',
      boxSizing: 'border-box',
    },
    label: {
      fontSize: (floatingLabel && (dirty || focused)) ? '12px' : (dense ? '13px' : '16px'),
      lineHeight: '16px',
      display: 'block',
      fontFamily: 'Roboto',
      position: 'absolute',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      transitionDuration: '0.2s',
      transitionProperty: 'color, font-size, top',
      color: ((dirty || focused) && floatingLabel) ? (primaryColor || 'rgba(63, 81, 181, 1)') 
        : (dark ? `rgba(255, 255 ,255, ${focused ? .7 : .54})` : `rgba(0, 0, 0, .54)`),
      top: floatingLabel ? (focused || dirty) ? paddingTop + 'px' : `${paddingTop + (paddingBottom / 2) + 16}px`
        : `${paddingBottom}px`,
      visibility: (!floatingLabel && dirty) && 'hidden', 
      pointerEvents: 'none',
    },
    input: {
      height: multiLine ? 'auto' : '16px',
      resize: 'none',
      // width: fullWidth ? '100%' : ((multiLine && width) && width),  
      width: '100%',   
      outline: 'none',
      border: 'none',
      padding: '0px',
      backgroundColor: backgroundColor || 'transparent',
      fontSize: dense ? '13px' : '16px',
      fontFamily: 'Roboto',
      color: dark ? '#FFF' : '#000',
      boxSizing: 'border-box',
      lineHeight: '16px',
      verticalAlign: 'top',
    },
    divider: {
      height: '1px',
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.12)',
      position: 'absolute',
      bottom: dense ? '4px' : '8px',
      overflow: 'visible',
    },
    highlighter: {
      width: focused ? '100%' : '0px',
      height: '2px',
      backgroundColor: 'rgba(63, 81, 181, 1)',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      transitionDuration: '0.2s',
      // above expands from left
      left: focused ? '0px' : '45%',
      position: 'absolute',
    },
    hint: {
      fontSize: '12px',
      color: error ? '#f44336' : 'rgba(0, 0, 0, 0.26)' ,
    },
    counter: {

    },
  }
  return styles;
}

export default class TextField extends PureComponent<void, Props, State> {
  props: Props;
  state: State = {
    dirty: false,
    pressed: false,
    focused: false
  };
  handleFocus: Handler = () => {
    this.setState({ focused: true })
  };
  handleBlur: Handler = () => {
    this.setState({ focused: false })
  };
  handleChange: Handler = (e: any) => {
    if (e.target.value !== '' && !this.state.dirty) {
      this.setState({ dirty: true })
    } else if (e.target.value === '') {
      this.setState({ dirty: false })
    }

    if (this.props.onChange) {
      this.props.onChange(e)
    }
  };
  render() {
    const { error, hint, errorMessage, label, multiLine, fullWidth } = this.props; // dense is for testing
    const style = getStyles(this.props, this.state)
    return (
      <div style={style.container}>
      <div
        style={style.textField}
      >
        {
          multiLine ?
          <textArea
            style={style.input}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            rows='5'
          />
          :          
          <input
            style={style.input}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
          />
          
        }
          <span style={style.label} >{ label || 'Label Text'}</span>
        {
          !fullWidth &&
          <div style={style.divider}>
            <div style={style.highlighter} />
          </div>
          
        }

      </div>
      <div style={style.hint}>
        {
          (error && errorMessage)
          ? errorMessage
          : hint
        }
      </div>

      </div>
    );
  }
};
