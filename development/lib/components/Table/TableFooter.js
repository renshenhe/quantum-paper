/* @flow */

import React, { PureComponent } from 'react';

function getStyles(props, state) {
  
  const styles = {
    container: {

    },
  };

  return styles;
};

export default class TableFooter extends PureComponent {
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