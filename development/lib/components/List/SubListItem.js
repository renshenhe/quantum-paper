/* @flow */

import React, { PureComponent } from 'react';

function getStyles(props, state) {
  
  const { isOpen } = props;
  const { distanceUp, display } = state;
  const styles = {
    container: {
      overflow: 'hidden',
      paddingLeft: '16px',
      position: 'relative',
      width: '100%',
      // height: '100%',
      // display: !isOpen && 'none',
      // transition: 'display 100ms cubic-bezier(0.4, 0, 0.2, 1) 200ms',
    },
    wrapper: {
      position: 'absolute',
      width: '100%',
      // height: '100%',
      top: '0',
      left: '0',
      transition: 'transform 200ms ease-in 100ms',
      transform: `translate3d(0px,${ isOpen ? '0px' : '-' + distanceUp}, 0px)`,
      transformStyle: 'preserve-3d',
    }
  };

  return styles;
};

export default class SubListItem extends PureComponent {
  state = {
    distanceUp: '',
    display: 'block',
  };
  componentDidMount() {
    this.setState({
      distanceUp: this.refs.wrapper.getBoundingClientRect().height + 'px',
    })
  }
  render() {
    const style = getStyles(this.props, this.state);

    return (
      <div
        style={style.container}
      >
      <div
        ref='wrapper'
        className='wrapper'
        style={style.wrapper}>
        { this.props.children }
      </div>
      </div>
    );
  }
};