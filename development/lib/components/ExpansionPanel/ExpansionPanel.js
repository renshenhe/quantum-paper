/* @flow */

import React, { PureComponent } from 'react';

function getStyles(props, state) {
  
  const styles = {
    container: {

    },
  };

  return styles;
};

export default class ExpansionPanel extends PureComponent {
  render() {
    const style = getStyles(this.props, this.state);

    return (
      <div
        style={style.container}
      >
        <div style={style.header}>

        </div>
        
      </div>
    );
  }
};