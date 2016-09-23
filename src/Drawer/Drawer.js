/* @flow */

import React, { PureComponent } from 'react';

function getStyles(props, state) {
  
  const styles = {
    container: {
      minWidth: '240px',
      maxWidth: '280px',
      top: '0',
      left: '0',
      bottom: '0',
      position: 'fixed',
      zIndex: '4',
      overflowX: 'hidden',
      overflowY: 'auto',
      boxShadow: '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
    },
  };

  return styles;
};

export default class Drawer extends PureComponent {
  render() {
    const style = getStyles(this.props, this.state);

    return (
      <div
        style={style.container}
      >
        { this.props.children }
      </div>
    );
  }
};