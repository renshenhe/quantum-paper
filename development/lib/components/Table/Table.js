/* @flow */

import React, { PureComponent } from 'react';

const getStyles = (props, state) => {
  const styles = {
    container: {
      // display: 'flex',
      // flexDirection: 'column',
      // flexWrap: 'nowrap',
      // width: '100%',
      // height: '100%',
      backgroundColor: 'rgb(255, 255, 255)',
      border: '1px solid rgba(0, 0, 0, 0.12)',
      fontFamily: 'Roboto',
      borderCollapse: 'collapse',
      whiteSpace: 'nowrap',
      fontSize: '13px',
      backgroundColor: '#FFF',
      // alignItems: 'baseline',
    }
  };

  return styles;
}; 

export default class Table extends PureComponent {
  render() {
    const style = getStyles(this.props, this.state);

    return (
      <table style={style.container}>
        { this.props.children }
      </table>
    );
  }
};