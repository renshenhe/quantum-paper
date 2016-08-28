/* @flow */

import React, { PureComponent } from 'react';
import MenuItem from '../MenuItem';
import Menu from '../Menu';
import IconMenu from '../../IconMenu/IconMenu';
import MoreVert from '../../Icon/testSvg/MoreVert';

export default class IconMenuTest extends PureComponent {
  render() {
    return (
      <div>
        <IconMenu
          icon={<MoreVert />}
          origin='bottom-right'
        >
            <MenuItem label='Maps' onClick={() => { 
              console.log('maps clicked')
            }} />
            <MenuItem label='Books' />
            <MenuItem label='Flights' />
            <MenuItem label='Apps' />
        </IconMenu>
        <IconMenu
          icon={<MoreVert />}
          origin='top-left'
        >
            <MenuItem label='Maps' onClick={() => { 
              console.log('maps clicked')
            }} />
            <MenuItem label='Books' />
            <MenuItem label='Flights' />
            <MenuItem label='Apps' />
        </IconMenu>
        <DemoContainer>
        <IconMenu
          icon={<MoreVert />}
          origin='top-left'
        >
            <MenuItem label='Maps' onClick={() => { 
              console.log('maps clicked')
            }} />
            <MenuItem label='Books' />
            <MenuItem label='Flights' />
            <MenuItem label='Apps' />
        </IconMenu>
        </DemoContainer>
      </div>
    );
  }
};

const DemoContainer = ({ children }) => (
  <div style={{
    position: 'relative',
    width: '200px',
  }}>
  <div style={{
    height: '300px',
    width: '100%',
    backgroundColor: '#FFF',

  }}>
  </div>
    <div style={{
      boxSizing: 'border-box',
      backgroundColor: '#EEE',
      width: '100%',
      textAlign: 'left',
    }}>
      { children }
    </div>
  </div>
)