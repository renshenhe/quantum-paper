/* @flow */

import React, { PureComponent } from 'react';
import Drawer from '../Drawer';
import ListItem from '../../List/ListItem';
import List from '../../List/List';
import SubListItem from '../../List/SubListItem';
import ExpandableListItem from '../../List/ExpandableListItem';

import InboxIcon from '../../SvgIcons/Content/InboxIcon';
import MailIcon from '../../SvgIcons/Content/MailIcon';
import DraftsIcon from '../../SvgIcons/Content/DraftsIcon';
import SendIcon from '../../SvgIcons/Content/SendIcon';

import ArrowDropDownIcon from '../../SvgIcons/Navigation/ArrowDropDownIcon';

import StarIcon from '../../SvgIcons/Toggle/StarIcon';
import Divider from '../../Divider/Divider';
import Menu from '../../Menu/Menu';


const FakeAvatar = () => {
  const style = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#e0e0e0',
  }
  return <div style={style} />
};
export default class ToggleSubMenu extends PureComponent {
  state = {
    subMenuOpen: false,
  };

  handleSubMenuToggle = () => {
    this.setState({
      subMenuOpen: !this.state.subMenuOpen
    })
  };
  render() {
    return (
      <Drawer>
        <List>
          <ExpandableListItem
            parent={<ListItem
              primaryText='Submenu Item one'
            />}
          >
            <ListItem
              dense={true}
              primaryText='Submenu Item one'
              leftSpacing='72px'
            />
            <ListItem
              dense={true}
              primaryText='Submenu Item two'
              avatar={<FakeAvatar />}
            />
          </ExpandableListItem>
        </List>
        <List>
        <ListItem avatar={<InboxIcon />}
          rightIcon={<ArrowDropDownIcon />} 
          primaryText='Inbox' 
        />
        <ListItem avatar={<StarIcon />} 
          primaryText='Starred' 
        />      
        <ListItem
          avatar={<SendIcon />} 
          primaryText='A very long title that will truncate when width is too big' />
        <ListItem
          avatar={<DraftsIcon />}
          onClick={this.handleSubMenuToggle} 
          primaryText='A very long title that will truncate when width is too big' />
        </List>
        <SubListItem
          isOpen={this.state.subMenuOpen}
        >
          <ListItem
            dense={true}
            primaryText='Submenu Item one'
          />
          <ListItem
            dense={true}
            primaryText='Submenu Item one'
          />
        </SubListItem>
        <Divider />
      </Drawer>
  )}
};