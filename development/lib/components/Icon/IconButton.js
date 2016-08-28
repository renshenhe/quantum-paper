/* @flow */

import React, { PureComponent } from 'react';
import ButtonBase from '../Base/ButtonBase';
import Ripple from '../Animation/Ripple';
import Tooltip from '../Tooltip/Tooltip';

function getStyles(props, state) {
  const { disabled, dense } = props;

  const size = dense ? '40px' : '48px';
  const styles = {
    container: {
      width: size,
      height: size,
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: disabled ? 'none' : 'pointer',
      borderRadius: '50%',
      position: 'relative',
    },
    rippleContainer: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: '0px',
      left: '0px',
    }
  };

  return styles;
}

export default class IconButton extends PureComponent {
  state = {
    rect: {},
    tooltip: false
  };
  componentDidMount() {
    if (this.props.tooltip) {
      let el = this.rect.getBoundingClientRect();
      const width = el.width;
      const height = el.height;
      const left = el.left;
      const right = el.right;
      this.setState({ rect: { width, height, left, right } }, () => {
      })
      
    }
  }
  handleClick = (e) => {
    if (this.props.onClick) {
      this.props.onClick(e)
    }
  };
  toggleTooltip = () => {
    if (this.props.tooltip) {
      this.setState({ tooltip: !this.state.tooltip });
    }
  };
  handleMouseOver = () => {
    this.toggleTooltip()
  };
  handle
  render() {
    const { children, tooltip, label, ...other } = this.props;
    const style = getStyles(this.props);
    return (
      <div 
        ref={r => this.rect = r}
        style={style.container}
        onClick={this.handleClick}
        onMouseEnter={this.toggleTooltip}
        onMouseLeave={this.toggleTooltip}
      >
          { children }
          { tooltip &&
            <Tooltip 
              label={label}
              visible={this.state.tooltip}
              linkedElement={this.state.rect}
            />
          }
        <div style={style.rippleContainer}>
        </div>
      </div>
    );
  }
};