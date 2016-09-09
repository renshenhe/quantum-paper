/* @flow */

import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Ripple from '../Ripple/Ripple';

function getStyles(props, state) {
  
  const {
    activeColor,
    inactiveColor,
    active,
    dense,
    width,
    icon,
    label,
  } = props;

  const styles = {
    container: {
      position: 'relative',
      paddingLeft: '12px',
      paddingRight: '12px',
      paddingTop: (icon && !label) ? '12px' : (icon ? '8px' : '16px'),
      // paddingTop: '16px',
      // paddingBottom: '16px',
      paddingBottom: (icon && !label) ? '12px' : (icon ? '12px' : '20px'),
      fontFamily: 'Roboto',
      fontSize: '14px',
      textTransform: 'uppercase',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      // justifyContent: (icon && label) ? 'flex-end' : 'center',
      justifyContent: 'center',
      color: active ? activeColor : inactiveColor,
      cursor: 'pointer',
      height: (icon && label) ? '72px' : '48px',
      backgroundColor: '#00bcd4',
      boxSizing: 'border-box',
      width,
      overflow: 'hidden',
      maxWidth: '264px',
      minWidth: dense ? '160px' : '72px',
    },
    // label: {
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   width: '100%',
    //   height: '100%',
    // },
    label: {
      lineHeight: '14px',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      marginTop: icon && '10px',
      // height: '100%',
      // width: '100%',
      // display: 'flex',
      // flexShrink: '0',
      // flexDirection: 'column',
      // alignItems: 'center',
      // justifyContent: 'flex-end',
      // alignSelf: 'flex-end',
    },
    icon: {
      // marginBottom: label && '10px',
      // width: '100%',
      // boxSizing: 'border-box',
      // alignSelf: 'bottom',
      // height: '24px',
      // display: 'flex',
      // flexDirection: 'column',
      // alignItems: 'center',
    },
    spacer: {
      width: '100%',
      height: '10px',
    },
    rippleContainer: {
      position: 'absolute',
      borderRadius: '2px',
      top: '0px',
      left: '0px',
      width: '100%',
      height: '100%',
      // overflow: 'hidden',      
    }
  };

  return styles;
};

export default class Tab extends PureComponent {
  static defaultProps = {
    activeColor: '#FFF',
    inactiveColor: 'rgba(255, 255, 255, 0.70)',
    active: false,
    rippleColor: 'rgba(255, 255, 255, 0.3)',
  };
  handleClick = (e) => {
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  };
  render() {
    const style = getStyles(this.props, this.state);
    const { icon, label, activeColor, inactiveColor, active, rippleColor } = this.props;
    let iconElement;
    if (icon && React.isValidElement(icon)) {
      const iconProps = {
        primaryColor: active ? activeColor : inactiveColor,
        fill: active ? activeColor : inactiveColor //Potential replacement

      };
      iconElement = React.cloneElement(icon, iconProps)
    };

    return (
      <div
        style={style.container}
        onClick={this.handleClick}
      >
        { iconElement }
        { label && <div style={style.label}>{ label }</div> }
        <div style={style.rippleContainer} >
        <Ripple rippleColor={rippleColor} />
        </div>
      </div>
    );
  }
};

        // { icon && <div style={style.icon}>{ iconElement }</div> }
