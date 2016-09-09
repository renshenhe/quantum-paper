/* @flow */

import React, { PureComponent } from 'react';

function getStyles(props, state) {
  
  const { focused, hovered } = state;
  const styles = {
    container: {
      // display: 'flex',
      // flexWrap: 'nowrap',
      backgroundColor: focused
        ? '#e0e0e0' 
        : hovered && '#EEE',
      height: '48px',
      transition: 'background-color 280ms cubic-bezier(0.4, 0, 0.2, 1)',

    },
  };

  return styles;
};

export default class TableRow extends PureComponent {
  state = {
    hovered: false,
    focused: false,
  };
  componentDidMount() {
    this.styleChildren()
  }
  handleFocus = (evt) => {
    this.setState({ focused: true })
  };
  handleBlur = (evt) => {
    this.setState({ focused: false })
  };
  handleMouseEnter = (evt) => {
    this.setState({ hovered: true })
  };
  handleMouseLeave = (evt) => {
    this.setState({ hovered: false })
  };
  styleChildren = () => {
    // if (React.isValidElement(this.props.children)) {
      // console.log('is valid element',React.isValidElement(this.props.children), 'child length', this.props.children.length)
    // }
    return React.Children.map(this.props.children, (child, i, arr) => {
      if (i === 0) {
        return React.cloneElement(child, { leftPadding: '24px' } );
      } else if (i === this.props.children.length - 1) {
        return React.cloneElement(child, { rightPadding: '24px' } );
      } else return child;
    });

  };
  render() {
    const style = getStyles(this.props, this.state);

    // let styledChildren = React.Children.map(this.props.children, )
    // let testClone = React.Children.map(this.props.children, (ele, index) => {
    //   console.log(index);
    // })
    return (
      <tr
        style={style.container}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        { this.styleChildren() }
      </tr>
    );
  }
};