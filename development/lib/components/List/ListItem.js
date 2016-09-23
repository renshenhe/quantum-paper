/* @flow */

import React, { Component } from 'react';
import Ripple from '../Ripple/Ripple';

type Props = {
  primaryText?: string;
  secondaryText?: string;
  lines?: number;
  avatar?: any;
  dense?: bool;
};

type State = {
  active?: bool,
  hovered?: bool,
};

type Handler = (e?: any) => void;



function getStyles(props: Props, state: State, context) {
  const {
    lines,
    avatar,
    dense,
    secondaryText,
    leftIcon,
    rightIcon,
    type,
    primaryAction,
    leftSpacing,
  } = props;
  
  const {
    active,
    hovered,
  } = state;
  const avatarHeight = avatar || leftIcon || rightIcon;

  let height = dense ? 40 : 48;

  if ((lines >= 2) || secondaryText) {
    if (dense) {
      height -= 4
    }
    if (lines === 3) {
      height += 16
    }
    height += 24
  } else if (avatarHeight) {
    height += 8
  }

  const styles = {
    container: {
      minHeight: '40px',
      position: 'relative',
      paddingLeft: !leftIcon && leftSpacing,
      // paddingRight: !rightIcon && '16px',
      paddingRight: '16px',
      paddingTop: '12px',
      paddingBottom: '12px',
      height: `${height}px`,
      display: 'flex',
      flexWrap: 'nowrap',
      width: '100%',
      boxSizing: 'border-box',
      backgroundColor: '#FFF',
      fontFamily: 'Roboto', // demo
      backgroundColor: hovered ? '#EFEFEF' : '#FFF',
    },
    item: {
      display: 'flex',
      flexDirection: 'nowrap',
      alignItems: 'center',
      width: '100%',
      // zIndex: '2', // prevent ripple container from taking over

    },
    avatar: {
      // zIndex: '2', // prevent ripple container from taking over
      width: '40px',
      height: '40px',
    },
    content: {
      fontSize: dense ? '13px' : '16px',
      // lineHeight: dense ? '16px' : '16px',
      paddingLeft: avatar && '16px',
      // zIndex: '2', // prevent ripple container from taking over
    },
    primaryText: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: '1',
      WebkitBoxOrient: 'vertical',
    },
    secondaryText: {
      fontSize: !dense && '14px',
      // lineHeight: dense ? '13px' : '14px',
      opacity: '.54',
      marginTop: '4px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: (lines === 3) ? 2 : 1,
      WebkitBoxOrient: 'vertical',
      maxHeight: '36px',
    },
    rightIcon: {
      alignSelf: 'center',
    },
    rippleContainer: {
      top: '0px',
      left: '0px',
      bottom: '0px',
      right: '0px',
      position: 'absolute',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
    },
    ruler: {
      height: height,
    }
  };

  return styles;
}


export default class ListItem extends Component {
  static defaultProps = {
    leftSpacing: '16px',
  };
  state: State = {
    active: false,
    hovered: false,
  };
  handleMouseOver: Handler = () => {
    this.setState({ hovered: true })
  };
  handleMouseOut: Handler = () => {
    this.setState({ hovered: false })
  };
  handleContentClick = (e) =>{
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }
  render() {
    const { primaryText, dense, lines, avatar, leftIcon, rightIcon, secondaryText, onClick, children } = this.props;
    const style = getStyles(this.props, this.state);
    return (
      <div style={style.container}
        onClick={this.handleContentClick}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
      >
        { children }
        <div style={style.item}>
          {
            (avatar || leftIcon) &&
            <div style={style.avatar}>
              { avatar || leftIcon }
            </div>
          }
          <div style={style.content}>
            <div style={style.primaryText} >{ primaryText }</div>
            {
              secondaryText &&
              <div style={style.secondaryText}>{ secondaryText }</div>
            }
          </div>
        </div>
          <div style={style.rightIcon}>
          {
            rightIcon
          }
          </div>
        <div style={style.rippleContainer}>
          <Ripple />
        </div>
      </div>
    );
  }
};

