/* @flow */

import React, { PureComponent } from 'react';

function getStyles(props) {
  const { dense } = props;

  const size = dense ? '20' : '24';
  const styles = {
    width: size,
    height: size,
    // viewBox: `0 0 ${size} ${size}`,
  }

  return styles;
}

export default class MoreVert extends PureComponent {
  render() {
    const style = getStyles(this.props);
    return (
      <svg fill="#000000" height={style.height} viewBox='0 0 24 24' width={style.width}>
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
      </svg>
    );
  }
};