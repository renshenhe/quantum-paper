import React, { PureComponent } from 'react';
import { findDOMNode } from 'react-dom';

function getStyles(props, state) {
  const {
    labelPosition,
    outerLabel,
  } = props;

  const styles = {
    container: {
      // border: '1px solid red',
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0px',
      boxSizing: 'border-box',
      justifyContent: 'center',
      zIndex: '10',
    },
    outline: {
      border: '1px solid #db0f8e',
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
    label: {
      fontSize: '10px',
      color: '#db0f8e',
      position: 'absolute',
      [labelPosition]: outerLabel ? `-15px` : '2px',
      zIndex: '10',
    }
  };

  return styles;
}

export default class MeasuredContainer extends PureComponent {
  static defaultProps = {
  };
  state = {
    label: null,
  };
  componentDidMount() {
    this.getContainerSize()
  };
  getContainerSize = () => {
    const rect = this.rectForContainerRuler.getBoundingClientRect();
    const { measure } = this.props;
    if (measure === 'height') {
      this.setState({ label: rect.height });
    } else if (measure === 'width') {
      this.setState({ label: rect.width })
    };
  };

  render() {
    const style = getStyles(this.props, this.state);
    return (
      <div 
        style={style.container}
        ref={r => this.rectForContainerRuler = r}
      >
        <div style={style.outline} />

        <div ref={n => this.labelRect = n } style={style.label}>
          { this.state.label }
        </div>
        { this.props.children }
      </div>
    );
  }
};

// class RulerLabel extends PureComponent {
//   state = {
//     labelWidth: 0,
//   };
//   render() {
//     return (
//       <div style={}  
//     );
//   }
// };
