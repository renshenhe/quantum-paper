/* @flow */

import React, { PureComponent } from 'react';
import Menu from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';
import IconButton from '../Icon/IconButton';

const getStyles = (props, state) => {
  const { visible, opened, top, right, bottom, left, transformOrigin, width, height } = state;
  const styles = {
    container: {
      display: 'inline-block',
      position: 'relative',
      // zIndex: opened && '-1'
    },
    menuContainer: {
      position: 'absolute',
      height: '0px',
      width: '0px',
      visibility: opened && 'hidden',
      zIndex: opened ? '999' : '-1',
    },
    menuOutline: {
      borderRadius: '2px',
      border: 'none',
      opacity: opened ? 1 : 0,
      transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 200ms cubic-bezier(0.4, 0, 0.2, 1)',
      transform: opened ? 'scale(1)' : 'scale(0)',
      transformOrigin: transformOrigin,
      position: 'absolute',
      top: top || 0,
      right: right,
      bottom: bottom,
      left: left || 0,
      width: width,
      height: height,
      zIndex: '10',
      backgroundColor: '#FFF',
    },

  }

  return styles;
}

export default class IconMenu extends PureComponent {
  state = {
    opened: false,
    left: '',
    right: '',
    top: '',
    bottom: '',
    transformOrigin: '',
    width: '',
    height: '',
    menuOrigin: {},
  };

  toggleMenu = (e) => {
    this.setState({ opened: !this.state.opened })
    console.log('icon clicked')
  };
  closeMenu = (e) => {
    this.setState({ opened: false })
  };
  getPositioning = () => {
    const menu = this.menuRect.getBoundingClientRect();
    const icon = this.iconRect.rect.getBoundingClientRect();
    // console.log('this is icon refs', icon.getBoundingClientRect())
    const { origin } = this.props;
    const { width, height } = this.menuRect.getBoundingClientRect();
    // console.log(width, height)
    console.log(this.menuRect.getBoundingClientRect())
    let top;
    let left;
    let right;
    let bottom;
    let t = '0px';
    let l = '0px';
    let r;
    let b;
    let transformOrigin = '0 0'
    // console.log(this.refs.iconRect)
    if (origin === 'bottom-right') {
      right = `${menu.right - icon.right}px`;
      top = `${this.iconRect.rect.offsetTop + this.iconRect.rect.offsetHeight}px`;
      l = 'auto';
      r = '0px';
      transformOrigin = '100% 0';
    } else if (origin === 'top-left') {
      left = `${this.iconRect.rect.offsetLeft}px`;
      bottom = `${icon.bottom - menu.top}px`;
      t = 'auto';
      b = '0px';
      transformOrigin = '0 100%';

    }  else if (origin === 'top-right') {
      right = `${icon.right - menu.right}px`; 
      bottom = `${icon.bottom - menu.top}px`;
      t = 'auto';
      left = 'auto';
      bottom = '0px';
      right = '0px';
      transformOrigin = '100% 100%';
    } else {
      left = `${icon.offsetLeft}px`;
      top = `${icon.offsetTop + icon.offsetHeight}px`;
    }
    const menuOrigin = {
      top: t,
      left: l,
      right: r,
      bottom: b,
    };
    this.setState({ top, right, bottom, left, transformOrigin, width: `${width}px`, height: `${height}px`, menuOrigin });
  };
  componentDidMount() {
    this.getPositioning();
  }
  componentWillReceiveProps() {
    this.getPositioning()
  }
  render() {
    const style = getStyles(this.props, this.state);

    const options = React.Children.map(this.props.children, (option) => {
      const {
        // label,
        // onClick,
        ...other,

      } = option.props;
      return (
        <MenuItem
          {...other}
          key={option.props.label}
          closeMenu={this.closeMenu}

          // label={option.props.label}
        />
      )
    });
    return (
      <div 
        style={style.container}
        onBlur={this.closeMenu}
      >

        <IconButton
          onClick={this.toggleMenu}
          ref={n => this.iconRect = n}
        >
          { this.props.icon }
        </IconButton>
        <div 
          ref={m => this.menuRect = m}
          style={style.menuOutline}>
          <Menu
            minWidth='168px'
            origin={this.state.menuOrigin}
            ref={a => this.menuRect = a}
            // ref='menu'
          >
            { options }
          </Menu>
        </div>
      </div>
    );
  }
};