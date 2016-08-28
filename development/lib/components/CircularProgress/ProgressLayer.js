/* @flow */

import React, { PureComponent } from 'react';

function getStyles(props, state) {
  const {
    color,
    indeterminate,
  } = props;

  const {
    rotation,
    transition,
  } = state;
  const styles = {
    container: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderColor: color,
      transition: 'transform 666.5ms cubic-bezier(0.4, 0, 0.2, 1)',
      transform: rotation,
    },
    clipper: {
      display: 'inline-block',
      position: 'relative',
      width: '50%',
      height: '100%',
      overflow: 'hidden',
      borderColor: 'inherit',
    },
    leftSpinner: {
      borderRightColor: 'transparent',
      width: '200%',
      boxSizing: 'border-box',
      height: '100%',
      borderWidth: '3px',
      borderStyle: 'solid',
      borderColor: 'inherit',
      borderBottomColor: 'transparent',
      borderRadius: '50%',
      position: 'absolute',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
      transform: ''
    },
    rightSpinner: {
      left: '-100%',
      borderRightColor: 'transparent',
      width: '200%',
      boxSizing: 'border-box',
      height: '100%',
      borderWidth: '3px',
      borderStyle: 'solid',
      borderColor: 'inherit',
      borderBottomColor: 'transparent',
      borderRadius: '50%',
      position: 'absolute',
      top: '0px',
      right: '0px',
      bottom: '0px',
    },
    gapPatch: {
      position: 'absolute',
      boxSizing: 'border-box',
      top: '0px',
      left: '45%',
      width: '10%',
      height: '100%',
      overflow: 'hidden',
      borderColor: 'inherit',
    },
    circle: {
      width: '1000%',
      left: '-450%',
      boxSizing: 'border-box',
      height: '100%',
      borderWidth: '3px',
      borderStyle: 'solid',
      borderColor: 'inherit',
      borderBottomColor: 'transparent',
      position: 'absolute',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    },
  };
  console.log(styles.container.transform)
  return styles;
};

export default class ProgressLayer extends PureComponent {
  state = {
    round: 1,
    // rotation: 'rotate(130deg)',
    // transition: 'transform 666.5ms cubic-bezier(0.4, 0, 0.2, 1)',
    transition: '',
    rotation: '',
  };
  componentDidMount() {
    this.handleRotation()
  }
  // handleRotation = () => {
  //   const { round } = this.state;
  //   let next = round + 1;
  //   let nextTransform = 666.5 * next;
  //   if (round <= 8) { 
  //     let rotate = `rotate(${135 * (next)}deg)`
  //     this.setState({ round: next, 
  //       transition: `transform ${nextTransform}ms cubic-bezier(0.4, 0, 0.2, 1)`,
  //       rotation: rotate,
  //     }, () => { console.log(this.state)})
  //     console.log('round <= 8 is running')
  //   } else {
  //     this.setState({ round: 1, rotation: 'rotate(130deg)',
  //       transition: 'transform 666.5ms cubic-bezier(0.4, 0, 0.2, 1)',
  //     })
  //     console.log('else is running')
  //   }
  // };
  handleRotation = () => {
      const { round } = this.state;
    setTimeout(() => {
      if (round <= 8) {

        this.setState({
          rotation: `rotate(${135 * round}deg)`,
          round: round + 1
        })
      } else {
        this.setState({
          // rotation: 'rotate(135deg)',
          round: 1,
        }, () => {
          this.handleRotation()
        })
      }
    }, round * 666.5)
  };
  reRotate = () => {
    this.handleRotation()
  };
  render() {
    const style = getStyles(this.props, this.state);

    return (
      <div
        style={style.container}
        onTransitionEnd={this.reRotate}
      >
        <div style={style.clipper}>
          <div style={style.leftSpinner} />
        </div>
        <div style={style.gapPatch}>
          <div style={style.circle} />
        </div>
        <div style={style.clipper}>
          <div style={style.rightSpinner} />
        </div>
      </div>
    );
  }
};

// const getRounds = (rounds) => {
//   switch (rounds) {
//     case 0:
//       return 
//     default:
//       return 0;
//   }
// };
const leftSpin = {
  '0%': 'transform: rotate(130deg)',
  '50%': 'transform: rotate(-5deg)',
  '100%': 'transform: rotate(130deg)',
};

const rightSpin = {
  '0%': 'transform: rotate(-130deg)',
  '50%': 'transform: rotate(5deg)',
  '100%': 'transform: rotate(-130deg)',
};

const fadeInOut = [
  {
    '0%': '.99',
    '25%': '.99',
    '26%': '0',
    '89%': '0',
    '90%': '.99',
    '100%': '.99'
  },
  {
    '0%': '0',
    '15%': '0',
    '25%': '.99',
    '50%': '.99',
    '51%': '0',
  },
  {
    '0%': '0',
    '40%': '0',
    '50%': '.99',
    '75%': '.99',
    '76%': '0',
  },
  {
    '0%': '0',
    '65%': '0',
    '75%': '.99',
    '90%': '.99',
    '100%': '.99',
  }
];

const unfillRotate = {
  '12.5%': 'transform: rotate(135deg)',
  '25%': 'transform: rotate(270deg)',
  '37.5%': 'transform: rotate(405deg)',
  '50%': 'transform: rotate(540deg)',
  '62.5%': 'transform: rotate(675deg)',
  '75%': 'transform: rotate(810deg)',
  '87.5%': 'transform: rotate(945deg)',
  '100%': 'transform: rotate(1080deg)',
}