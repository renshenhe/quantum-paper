/* @flow */

import React, { PureComponent } from 'react';

function getStyles(props) {

  const styles = {
    container: {

    },
    heading: {
      fontSize: '15px',
      lineHeight: '24px',
      color: '#212121',
      fontWeight: '500',
      // marginBottom: '30px',
      fontFamily: 'Roboto',
      margin: '0px 0px 30px 0px',
      textRendering: 'optimizeLegibility',
      boxSizing: 'border-box',
      WebkitFontSmoothing: 'antialiased',
    },
    specSheet: {

    },
    specExample: {

    },
  }
}
export default class SpecModule extends PureComponent {
  render() {
    const style = getStyles(this.props);
    const { specExample, specSheet, heading } = this.props;
    return (
      <section style={style.container}>
        <h3 style={style.heading}>
          { heading }
        </h3>
        <div style={style.specSheet}>
          { specExample }
        </div>
        <div style={style.specExample}>
         { specExample }
        </div>
      </section>
    );
  }
};