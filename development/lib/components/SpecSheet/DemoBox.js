/* @flow */

import React, { PureComponent } from 'react';

function getStyles(props, state) {
  const styles = {
    container: {
      width: '760px',
      backgroundColor: '#eee',
      position: 'relative',
      display: 'inline-block',
      padding: '58px',
      boxSizing: 'border-box',
      ...props.styles
    },
  };

  return styles;
};

export default class DemoBox extends PureComponent {
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