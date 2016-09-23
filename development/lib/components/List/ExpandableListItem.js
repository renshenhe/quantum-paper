/* @flow */

import React, { PureComponent } from 'react';

function getStyles(props, state) {
  const { closedHeight, openedHeight } = state;
  const { expanded } = props;
  const styles = {
    container: {
      height: expanded ? openedHeight : closedHeight,
      transition: 'height 375ms cubic-bezier(0.4, 0, 0.2, 1)',
      overflow: 'hidden',      
    },
    subListItem: {
      opacity: expanded ? '1' : '0',
      transitionStyle: 'cubic-bezier(0.4, 0, 0.2, 1)',
      transitionDuration: expanded ? '150ms' : '75ms',
      transitionDelay: expanded ? '0ms' : '75ms',
      transitionProperty: 'opacity',
    },
  };

  return styles;
};

export default class ExpandableListItem extends PureComponent {
  state = {
    closedHeight: '',
    openedHeight: '',
    expanded: false,
  };
  componentDidMount() {
    this.setState({
      closedHeight: this.refs.wrapper.getBoundingClientRect().height + 'px',
      openedHeight: this.refs.container.getBoundingClientRect().height + 'px',
    })
  }
  handleParentClick = (e) => {
    if (this.props.onClick) {
      this.props.onClick(e)
    };
    // this.setState({
    //   expanded: !this.state.expanded
    // })
  };
  render() {
    const style = getStyles(this.props, this.state);

    return (
      <div
        ref='container'
        style={style.container}
      >
        <div
          ref='wrapper'
          onClick={this.handleParentClick}
        >
          { this.props.parent }
        </div>
        <div
          style={style.subListItem}
        >
          { this.props.children }
        </div>        
      </div>
    );
  }
};