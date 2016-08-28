/* @flow */

import React, { PureComponent } from 'react';

function getStyles(props, state) {
  const {
    indicatorColor,
    width,
    tabIndex,
    translateX,
  } = props;

  // const index = tabIndex === 0 ? 0
  const styles = {
    container: {
      height: '2px',
      position: 'absolute',
      bottom: '0px',
      backgroundColor: indicatorColor,
      width: `${width}px`,
      transform: `translate3d(${(tabIndex * width) + 'px'},0,0)`,
      transition: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
  };

  return styles;
};

export default class TabIndicator extends PureComponent {
  static defaultProps = {
    indicatorColor: '#ffff8d',
  };
  render() {
    const style = getStyles(this.props, this.state);

    return (
      <div
        style={style.container}
      >
        
      </div>
    );
  }
};