/* @flow */

import React, { PureComponent } from 'react';

const getStyles = (props, state) => {
  const { deletable, icon } = props;
  const { elevated, hovered } = state;

  const styles = {
    container: {
      height: '32px',
      borderRadius: '16px',
      backgroundColor: hovered ? 'rgba(0, 0, 0, 0.54)' : '#eee',
      opacity: '.9',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      boxShadow: elevated && '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
      transition: 'box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    label: {
      fontSize: '13px',
      fontFamily: 'Roboto',
      paddingLeft: icon ? '8px' : '12px',
      paddingRight: deletable || '12px',
      color: hovered ? '#FFF' : 'rgba(0, 0, 0, .87)'
    },
    removeIcon: {
      fill: hovered ? '#FFF' : '#000',
      margin: '0px 4px',
      opacity: !hovered && '.54',
    },
    icon: {
      position: 'relative',
      maxWidth: '32px',
      maxHeight: '32px',
      borderRadius: '16px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    iconContainer: {
      width: '100%',
      height: '100%',
    }
  };

  return styles;
}
export default class Chip extends PureComponent {
  // Needs recognition of click/mouse up
  state = {
    elevated: false,
    hovered: false,    
  };
  elevateUp = (e) => {
    if (!this.state.elevated) {
      this.setState({ elevated: true })
    }
  };
  elevateDown = (e) => {
    if (this.state.elevated) {
      this.setState({ elevated: false })
    }
  };
  handleMouseEnter = (e) => {
    this.setState({ hovered: true })
  };
  handleMouseLeave = (e) => {
    this.setState({ hovered: false })
  };
  handleClick = (e) => {
    if (this.props.onClick) {
      this.props.onClick(e)
    }
  };  
  render() {
    const style = getStyles(this.props, this.state);
    return (
      <div style={style.container}
        onFocus={this.elevateUp}
        onBlur={this.elevateDown}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onMouseDown={this.elevateUp}
        onMouseUp={this.elevateDown}
        onClick={this.handleClick}
      >
        {
          this.props.icon &&
          <div style={style.icon}>
            { this.props.icon }
          </div>
        }
        <div style={style.label}>
          { this.props.label }
        </div>
        {
          this.props.deletable &&
          <svg style={style.removeIcon} height="18" viewBox="0 0 24 24" width="24">
              <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        }
      </div>
    );
  }
};  