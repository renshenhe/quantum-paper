/* @flow */

import React, { PureComponent } from 'react';

const getStyles = (props) => {
  const {
    toggled,
    dense,
  } = props;

  const styles = {
    // container: {
    //   position: 'relative',
    //   display: 'inline-flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   width: dense ? '40px' : '48px',
    //   height: dense ? '40px' : '48px',
    // },
    container: {
      padding: '12px',
      boxSizing: 'border-box',
      width: dense ? '40px' : '48px',
      height: dense ? '40px' : '48px',
      display: 'inline-flex',
      cursor: 'pointer',
      position: 'relative',
      zIndex: '10',
      justifyContent: 'center',
      alignItems: 'center',
      // alignSelf: 'top',
    },
    outline: {
      boxSizing: 'border-box',
      width: '20px',
      height: '20px',
      margin: '0px',
      cursor: 'pointer',
      overflow: 'hidden',
      border: `2px solid rgba(${ toggled ? '63,81,181,1' : '0,0,0, 0.54'})`,
      borderRadius: '50%',
      zIndex: '2',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',      
    },
    tick: {
      height: '10px',
      width: '10px',
      borderRadius: '50%',

      // transitionDuration: '0.28s',
      // transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      // transitionProperty: 'background',
      // background: toggled && 'rgb(63,81,181) url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8cGF0aAogICAgIGQ9Ik0gMC4wNDAzODA1OSwwLjYyNjc3NjcgMC4xNDY0NDY2MSwwLjUyMDcxMDY4IDAuNDI5Mjg5MzIsMC44MDM1NTMzOSAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IE0gMC4yMTcxNTcyOSwwLjgwMzU1MzM5IDAuODUzNTUzMzksMC4xNjcxNTcyOSAwLjk1OTYxOTQxLDAuMjczMjIzMyAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IgogICAgIGlkPSJyZWN0Mzc4MCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K")',
      background: 'rgb(63,81,181)',
      transition: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1)',
      transform: toggled ? 'scale(1)' : 'scale(0)' ,
    },
  }

  return styles;
};

export default class RadioButton extends PureComponent {
  handleClick = (e) => {
    if (this.props.onClick) {
      this.props.onClick(e);
    };
  };
  render() {
    const style = getStyles(this.props)
    return (
      <div
        style={style.container}
        onClick={this.handleClick}
      >
        <div style={style.outline}>
          <div style={style.tick} />
        </div>
      </div>
    );
  }
};