/* @flow */

import React, { PureComponent } from 'react';

export default class Animatable extends PureComponent {
  render() {
    const { children, getRef } = this.props;

    this.element = React.cloneElement(children, {
      ref: node => {
        this.node = node;

        if (getRef) {
          getRef(node);
        };

        return node;
      }
    })
    return (
      React.Children.only(this.element)
    );
  }
};

