
import React, { Component } from 'react';
import Ruler from '../Ruler/Ruler.jsx';

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
  // handleChange?: handleChange;
  // handleFocus?: handleFocus;
  // handleBlur?: handleBlur;
  handleChange: (e?: any) => void;
  handleFocus: (e?: any) => void;
  handleBlur: (e?: any) => void;
  errorMessage?: string;
};
type State = {
  dirty: bool;
  focused: bool;
  pressed: bool;
};

type Handler = (e?: any) => void;

function getStyles(props: Props, state: State, context) {
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
  } = props;
  const {
    focused,
    dirty,

  } = state;
  const paddingTop = fullWidth ? (dense ? 16 : 20) : (dense ? 12 : 16);
  const paddingBottom = fullWidth ? (dense ? 16 : 20) : (dense ? 12 : 16);
  // const paddingBottom = dense ? 12 : 16;
  const height = (fullWidth && multiLine) ? '100%' : (floatingLabel ? (dense ? '60px' : '72px') : (dense ? '40px' : '48px'));
  const styles = {
    container: {
      display: 'inline-block',
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
      height: '16px',      
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
  }
  console.log(styles.label.visibility)
  return styles;
}

export default class TextField extends Component<void, Props, State> {
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
    const { error, hint, errorMessage, label, dense, floatingLabel, fullWidth, multiLine } = this.props; // dense is for testing
    const style = getStyles(this.props, this.state)
    return (
      <div style={style.container}>
      <div
        style={style.textField}
      >
        <input
          style={style.input}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
        />
          <span style={style.label} >{ label || 'Type Here'}</span>
        {
          !fullWidth &&
          <div style={style.divider}>
            <div style={style.highlighter} />
          </div>
          
        }
          {
            floatingLabel &&
                <div>
                <Ruler marker={1} top={0} height={ dense ? 12 : 16} width={16} />
                <Ruler marker={2} top={dense ? 12 : 16} height={16} />
                <Ruler marker={3} top={ dense ? 28 : 32} height={dense ? 4 : 8} width={16} />
                <Ruler marker={4} top={dense ? 32 : 40} shift={dense} height={16} />
                <Ruler marker={5} top={dense ? 48 : 56} height={8} width={16} />
                <Ruler marker={6} top={dense ? 56 : 64} height={ dense ? 4 : 8} width={16} shift={dense} />
                </div>
          }
          {
            (!floatingLabel && !fullWidth) &&
                <div>
                <Ruler marker={1} top={0} height={ dense ? 12 : 16} width={16} />
                <Ruler marker={2} top={ dense ? 12 : 16} height={16} />
                <Ruler marker={5} top={dense ? 28 : 32} height={8} width={16} />
                <Ruler marker={6} top={dense ? 36 : 40} height={ dense ? 4 : 8} width={16} shift={dense} />
                </div>            
          }
          {
            fullWidth &&
                <div>
                <Ruler marker={1} top={0} height={ dense ? 16 : 20} width={16} />
                <Ruler marker={2} top={dense ? 16 : 20} height={16} />
                <Ruler marker={1} top={dense ? 32 : 36} height={ dense ? 16 : 20} width={16} />
                </div>            
          }  
          {
            (fullWidth && multiLine) &&
                <div>
                <Ruler marker={1} top={0} height={ dense ? 16 : 20} width={16} />
                <Ruler marker={2} top={dense ? 16 : 20} height={style.container.height} />
                <Ruler marker={1} top={dense ? 32 : 36} height={ dense ? 16 : 20} width={16} />
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