/* @flow */

import React, { PureComponent } from 'react';
import Animatable from './Animatable';
import ReactDOM from 'react-dom';

import playable from './playable';

// class Animation extends Animatable {
//   constructor() {
//     super();

//     this.state = {
//       player: null
//     };
//   }
//   startAnimation() {
//     return this.setPlayer(this.node.animate(this.keyframes, this.timing.toJS()))
//   }
//   componentWillReceiveProps(nextProps) {
//     const { timing, keyframes } = nextProps;
//     if (timing && keyframes) {
//       let new
//       const newTiming = new Map(timing);
      
//       // if ((keyframes !== this.keyframes)) {
//         this.timing = newTiming;
//         this.keyframes = keyframes;

//         this.startAnimation();
//       // }
//     }
//     this.updatePlayer(nextProps)
//   }
//   componentDidMount() {
//     const { timing, keyframes } = this.props;

//     this.keyframes = keyframes;
//     this.timing = new Map(timing);

//     const player = this.startAnimation();
//     this.updatePlayer(this.props, player);
//   }

//   render() {
//     const { children, getRef, timing, playState } = this.props;
//     const { player } = this.state;

//     this.element = React.cloneElement(children, {
//       ref: node => {
//         this.node = node;
//         if (getRef) {
//           getRef(node);
//         }
//         return node;
//       },
//       player,
//       playState,
//       timelineLength: isFinite(timing.iterations)
//         ? timing.delay + timing.duration * timing.iterations
//         : 'Infinity'
//     });
//     return (
//        React.Children.only(this.element)
//     );
//   }
// };

// Object.assign(Animation.prototype, playable);

// export default Animation;

const scaleKeyframes = [
  { transform: 'scale(1)', opacity: 1, offset: 0 },
  { transform: 'scale(.5)', opacity: .5, offset: .3 },
  { transform: 'scale(.667)', opacity: .667, offset: .7875 },
  { transform: 'scale(.6)', opacity: .6, offset: 1 }
];

const timing = {
  duration: 700,
  easing: 'ease-in-out',
  delay: 10,
  iterations: Infinity,
  direction: 'alternate',
  fill: 'forwards',
};
export default class Animation extends PureComponent {
  componentDidMount() {
    let ele = ReactDOM.findDOMNode(this);
    ele.animate(scaleKeyframes, timing)

  }

  render() {
    return (
      <div style={{width: '100px', height: '300px', backgroundColor: 'red' }}/>
    );
  }
};