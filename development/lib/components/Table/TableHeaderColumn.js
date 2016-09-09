/* @flow */

import React, { PureComponent } from 'react';

function getStyles(props, state) {
  const { align, rightPadding, leftPadding } = props;
  const { stringChild } = state;

  const styles = {
    container: {
      // position: 'relative',
      paddingRight: stringChild &&  rightPadding,
      paddingLeft: stringChild ? leftPadding : '8px',
      textAlign: align,
      verticalAlign: 'middle',
      borderTop: '1px solid rgba(0, 0, 0, 0.12)',
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
      // paddingTop: '12px',
      boxSizing: 'border-box',
    },
  };

  return styles;
};

export default class TableHeaderColumn extends PureComponent {
  static defaultProps = {
    align: 'left',
    rightPadding: '56px',
    leftPadding: '0px',
  };
  state = {
    stringChild: true,
  };
  componentWillMount() {
    if (typeof this.props.children !== 'string') {
      this.setState({ stringChild: false })
    }
    if (this.props.first) {
      console.log('is first child')
    }
  }
  render() {
    const style = getStyles(this.props, this.state);

    return (
      <td
        style={style.container}
      >
        { this.props.children }
      </td>
    );
  }
};