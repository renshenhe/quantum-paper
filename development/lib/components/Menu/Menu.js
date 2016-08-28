/* @flow */

import React, { PureComponent } from 'react';

const getStyles = (props, state) => {
  const {
    minWidth,
    origin: {
      top,
      left,
      right,
      bottom
    }
  } = props;
  const styles = {
    container: {
      padding: '8px 0px',
      display: 'inline-flex',
      flexDirection: 'column',
      minWidth: minWidth,
      maxWidth: '280px',
      zIndex: '10',
      backgroundColor: '#FFF',
      boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
      transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1), height 200ms cubic-bezier(0.4, 0, 0.2, 1)',
      borderRadius: '2px',
      left: '0px',
      position: 'absolute',
      top: top,
      bottom: bottom,
      left: left,
      right: right,
    }
  }
  return styles;
};


export default class Menu extends PureComponent {
  static defaultProps = {
    minWidth: '112px',
    origin: {
      top: '0px',
      left: '0px',
      right: '',
      bottom: '',
    }
  };
  render() {
    const style = getStyles(this.props, this.state);
    // const { mutli, ...other } = this.props;
    return (
      <div 
        style={style.container}
      >
        { this.props.children }
      </div>
    );
  }
};