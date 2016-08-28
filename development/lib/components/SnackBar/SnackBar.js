/* @flow */

import React, { PureComponent } from 'react';


const getStyles = (props, state) => {
  const {
    actionLabel,
  } = props;

  const styles = {
    container: {
      width: '100%',
      minHeight: '48px',
      backgroundColor: '#323232',

      fontSize: '14px',
      fontFamily: 'Roboto',
      display: 'flex',
      alignItems: 'center',
      padding: '0px 24px',
    },
    message: {
      color: '#FFF',
      // padding: '0px 24px',
      paddingRight: actionLabel && '24px',
    },
    action: {
      textTransform: 'uppercase',
      fontWeight: '500',
      color: '#eeff41',
      cursor: 'pointer',
    },
  };

  return styles;
}
export default class SnackBar extends PureComponent {
  static defaultProps = {
    actionLabel: 'action',
    message: 'Snackbar default message',
  }
  render() {
    const style = getStyles(this.props, this.state);

    return (
      <div style={style.container}>
        <div style={style.message}>
          { this.props.message }
        </div>
        <div 
          style={style.action}
          onClick={this.props.onActionClick}
        >
          { this.props.actionLabel }
        </div>
      </div>
    );
  }
};