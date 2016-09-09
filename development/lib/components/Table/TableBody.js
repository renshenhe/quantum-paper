/* @flow */

import React, { PureComponent } from 'react';

function getStyles(props, state) {
  
  const styles = {
    container: {
      // display: 'inline-flex',
      // flexDirection: 'column',
      fontSize: '13px',
      fontFamily: 'Roboto',
      color: 'rgba(0, 0, 0, 0.87)',
      borderCollapse: 'collapse',
      whiteSpace: 'nowrap',
      
    },
  };

  return styles;
};

export default class TableBody extends PureComponent {
  render() {
    const style = getStyles(this.props, this.state);

    return (
      <tbody
        style={style.container}
      >
        { this.props.children }
      </tbody>
    );
  }
};