/* @flow */

import React, { PureComponent } from 'react';

function getStyles(props, state) {
  
  const styles = {
    container: {
      // position: 'relative',
      verticalAlign: 'bottom',
      textOverflow: 'ellipsis',
      fontSize: '12px',
      fontWeight: '700',
      lineHeight: '24px',
      letterSpacing: '0',
      height: '48px',
      fontSize: '12px',
      color: 'rgba(0, 0, 0, 0.54)',
      paddingBottom: '8px',
      boxSizing: 'border-box',
      padding: '0px 18px 12px 18px',      
    },
  };

  return styles;
};

export default class TableHeader extends PureComponent {
  render() {
    const style = getStyles(this.props, this.state);

    return (
      <thead
        style={style.container}
      >
        { this.props.children }
      </thead>
    );
  }
};