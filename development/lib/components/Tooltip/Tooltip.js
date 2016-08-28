/* @flow */

import React, { PureComponent } from 'react';

const getStyles = (props, state) => {
  const {
    visible,
    dense,
  } = props;

  const {
    left,
    right
  } = state;
  const styles = {
    container: {
      position: 'absolute',
      top: visible ? '24px' : '0px',
      left: left,
      right: right,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#616161',
      opacity: '.9',
      marginTop: dense ? '14px' : '24px',
      padding: dense ? '0px 8px' : '0px 16px',
      height: dense ? '22px' : '32px',
      borderRadius: '2px',
      pointerEvents: 'none',
      transition: visible && 'opacity 300ms cubic-bezier(0.4, 0, 0.2, 1), top 200ms cubic-bezier(0.4, 0, 0.2, 1)',
      opacity: visible ? 1 : 0,
      zIndex: '10',
    },
    label: {
      fontFamily: 'Roboto',
      fontSize: dense ? '10px' : '14px',
      color: '#FFF',
    },
  }

  return styles;
};

export default class Tooltip extends PureComponent {
  state = {
    left: '',
    right: '',
  };
  componentDidMount() {
    // console.log(this.refs.tt.offsetWidth)
    // this.adjustPosition();
  }
  componentDidUpdate() {
    this.adjustPosition();
  }

  adjustPosition = () => {
    const { left, right } = this.props.linkedElement;
    const tooltip = this.tooltip.getBoundingClientRect();

    if (tooltip.right > window.innerWidth) {
      let r = (window.innerWidth - right) / 2;
      this.setState({ right: `${r}px` })
    }
    if (tooltip.left < 0) {
      let l = left / 2;
      this.setState({ left: `${l}px` })
    }
  };
  render() {
    const style = getStyles(this.props, this.state);
    return (
      <div ref={r => this.tooltip = r} style={style.container}>
        <span style={style.label} >
          { this.props.label }
        </span>
      </div>
    );
  }
};  