/* @flow */

import React, { PureComponent } from 'react';

const getStyles = (props) => {
  const { 
    toggled,
    dense,
    disabledTrackColor,
    disabledThumbColor,
    trackColor,
    thumbColor,
  } = props;

  const disabledCircleColor = disabledThumbColor || '#FFF';
  const disabledBarColor = disabledTrackColor || 'rgba(0, 0, 0, .26)';
  const styles = {
    container: {
      position: 'relative',
      cursor: 'pointer',
      zIndex: '1',
      verticalAlign: 'middle',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: dense ? '40px' : '48px',
      height: dense ? '40px' : '48px',
      overflow: 'visible',
    },
    track: {
      position: 'relative',
      // left: '0px',
      // top: '5px',
      height: '14px',
      width: '36px',
      borderRadius: '14px',
      backgroundColor: toggled ? (trackColor || 'rgba(0,150,136, .5)') : 'rgba(0,0,0,.26)',
      transition: 'background-color .3s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    thumb: {
      backgroundColor: toggled ? 'rgba(0, 150, 136, 1)' : '#fafafa',
      position: 'absolute',
      left: toggled ? '16px' : '0px',
      top: '-3px',
      height: '20px',
      width: '20px',
      borderRadius: '50%',
      cursor: 'pointer',
      boxShadow: '0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)',
      transition: 'left .3s cubic-bezier(0.4, 0, 0.2, 1)',
      // activeState: {
      //   left: '16px',
      //   backgroundColor: '#3f51b5',
      //   boxShadow: '0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.2),0 1px 8px 0 rgba(0,0,0,.12)',
      // }
    },
    rippleContainer: {
      position: 'absolute',
      zIndex: '2',
      top: '-12px',
      left: '-14px',
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      cursor: 'pointer',
      overflow: 'hidden',
    }
  }

  return styles;

};
export default class Switch extends PureComponent {
  handleClick = (e) => {
    if (this.props.onClick) {
      this.props.onClick(e)
    };
  };
  render() {
    const style = getStyles(this.props);
    return (
      <div 
        style={style.container}
        onClick={this.handleClick}
      >
        <div style={style.track}>
          <div style={style.thumb} />
        </div>
      </div>
    );
  }
};