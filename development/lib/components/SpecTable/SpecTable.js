/* @flow */

import React, { PureComponent } from 'react';

function getStyles(props, state) {
  const { fontFamily } = props;
  const styles = {
    container: {
      margin: '10px 0px 0px 0px',
      padding: '0',
      border: '0',
      fontSize: '100%',
      font: fontFamily,
      verticalAlign: 'baseline',
    },
    caption: {
      color: '#616161',
      fontSize: '13px',
      lineHeight: '24px',
      marginBottom: '0px',
      maxWidth: '760px',
    }
  };

  return styles;
};

export default class SpecTable extends PureComponent {
  static defaultProps = {
    fontFamily: 'Roboto',
  };
  render() {
    const style = getStyles(this.props, this.state);

    return (
      <figcaption
        style={style.container}
      >
        <div style={style.caption}>{ this.props.caption }</div>
        <table style={style.table}>
          <tbody>
            { this.props.children }
          </tbody>
        </table>
      </figcaption>
    );
  }
};