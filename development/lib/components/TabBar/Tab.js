/* @flow */

import React, { PureComponent } from 'react';

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
      paddingLeft: '12px',
      paddingRight: '12px',
      paddingBottom: (icon && !label) ? '0' : icon && '16px',
      fontFamily: 'Roboto',
      fontSize: '14px',
      textTransform: 'uppercase',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: (icon && label) ? 'flex-end' : 'center',
      // justifyContent: 'center',
      color: active ? activeColor : inactiveColor,
      cursor: 'pointer',
      height: (icon && label) ? '72px' : '48px',
      backgroundColor: '#00bcd4',
      boxSizing: 'border-box',
      width,
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
      verticalAlign: 'bottom',
      lineHeight: '14px',
    },
    icon: {
      marginBottom: label && '10px',
      boxSizing: 'border-box',
      height: '24px',
      alignSelf: 'bottom',
    },
    spacer: {
      width: '100%',
      height: '10px',
    }
  };

  return styles;
};

export default class Tab extends PureComponent {
  static defaultProps = {
    activeColor: '#FFF',
    inactiveColor: 'rgba(255, 255, 255, 0.70)',
    active: false,
  };
  handleClick = (e) => {
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  };
  render() {
    const style = getStyles(this.props, this.state);
    const { icon, label, activeColor, inactiveColor, active } = this.props;
    let iconElement;
    if (icon && React.isValidElement(icon)) {
      const iconProps = {
        primaryColor: active ? activeColor : inactiveColor
      };
      iconElement = React.cloneElement(icon, iconProps)
    };

    return (
      <div
        style={style.container}
        onClick={this.handleClick}
      >
        {
          icon &&
          <div style={style.icon}>
          { iconElement }
          </div>
          
        }
        {
          label &&
          <div style={style.label}>
          { label }
          </div>
          
        }
      </div>
    );
  }
};