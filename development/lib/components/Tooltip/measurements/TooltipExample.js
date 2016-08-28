import React, { PureComponent } from 'react';
import Tooltip from '../Tooltip';
import IconButton from '../../Icon/IconButton';
import CloudDownload from '../../Icon/testSvg/CloudDownload';

export default class TooltipExample extends PureComponent {
  componentDidMount() {
    let wHeight = window.innerHeight;
    let wWidth = window.innerWidth;
  }
  render() {
    return (
      <div >
        <div style={{ alignSelf: 'flex-start'}} >
          <IconButton
            tooltip={true}
            label='Download' 
          >
            <CloudDownload />
          </IconButton>
        </div>
        <div style={{ float: 'right' }}>
          <IconButton
            tooltip={true}
            label='Download' 
          >
            <CloudDownload />
          </IconButton>          
        </div>
      </div>
    );
  }
};