/* @flow */

import React, { PureComponent } from 'react';
import Tab from './Tab';
import TabIndicator from './TabIndicator';

const getStyles = (props, state) => {
  const {
    backgroundColor,
    align,
  } = props;

  const styles = {
    container: {
      backgroundColor: backgroundColor,
      display: 'flex',
      flexWrap: 'nowrap',
      alignItems: align,
      position: 'relative',
    },
  };

  return styles;
};

export default class TabBar extends PureComponent {
  static defaultProps = {
    backgroundColor: '#00bcd4',
  };
  state = {
    tabWidth: 0,
    tabIndex: [],
    shiftIndicator: '0px',
  };
  componentDidMount() {
    this.calculateTabWidth();
  }

  calculateTabWidth = () => {
    let el = this.tabBarRect.getBoundingClientRect();
    let children = React.Children.count(this.props.children);
    let sizing = el.width / children;
    this.setState({ tabWidth: sizing })
  };
  handleSelection = () => {

  };
  render() {
    const style = getStyles(this.props, this.state);
    const tabs = React.Children.map(this.props.children, (option) => {
      const {
        value,
        ...other,
      } = option.props;
      return (
        <Tab
          {...other}
          key={option.props.label}
          width={this.state.tabWidth}
          active={value === this.props.selected }
        />
      )
    });
    return (
      <div 
        style={style.container}
        ref={r => this.tabBarRect = r }
      >
        { tabs }
        <TabIndicator
          indicatorColor={this.props.indicatorColor}
          width={this.state.tabWidth}
          tabIndex={this.props.selected}
        />
      </div>
    );
  }
};