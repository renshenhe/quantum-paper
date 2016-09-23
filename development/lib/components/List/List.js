/* @flow */

import React, { PureComponent } from 'react';

function getStyles(props, state) {
  
  const styles = {
    container: {
      // width: '100%',
      // height: '100%',
      boxSizing: 'border-box',
      padding: '8px 0px',
    },
  };

  return styles;
};

export default class List extends PureComponent {
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