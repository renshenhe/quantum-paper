/* @flow */

import React, { PureComponent } from 'react';
import ProgressLayer from './ProgressLayer';
import ReactDOM from 'react-dom';

function getStyles(props, state) {

  const styles = {
    container: {
      display: 'inline-block',
      position: 'relative',
      width: '28px',
      height: '28px',
    },
  };

  return styles;
};

export default class CircularProgress extends PureComponent {
  componentDidMount() {
    // let ele = ReactDOM.findDOMNode(this);

    // ele.animate(containerRotateKeyframes, containerRotateConfig)
    this.container.animate(containerRotateKeyframes, containerRotateConfig);
  }
  render() {
    const style = getStyles(this.props, this.state);
    return (
      <div ref={r => this.container = r}  style={style.container}>
        {
          colors.map((color, i) => (
            <ProgressLayer number={i} layer={layers[i]} fadeInOut={fadeInOut[i]} color={color} key={color} />
          ))
        }


      </div>
    );
  }
};
        // <ProgressLayer layer={layers[0]} />
        // <ProgressLayer layer={layers[1]} />
        // <ProgressLayer layer={layers[2]} />
        // <ProgressLayer layer={layers[3]} />
const colors = [
'rgb(66,165,245)',
'rgb(244,67,54)',
'rgb(253,216,53)',
'rgb(76,175,80)'
];

const containerRotateKeyframes = [
  { transform: 'rotate(0deg)' },
  { transform: 'rotate(360deg)', offset: 1 },
];

const containerRotateConfig = {
  // duration: 1568.23529412,
  duration: 1568,

  easing: 'linear',
  iterations: Infinity
}



const layers = [
  [
    { transform: 'none', opacity: .99, offset: 0 },
    // { transform: 'rotate(0deg)', opacity: .99 },
    { transform: 'rotate(135deg)', offset: .125 },
    { transform: 'rotate(270deg)', opacity: .99, offset: .25 },
    { opacity: 0, offset: .26 },
    { transform: 'rotate(405deg)', offset: .375 },
    { transform: 'rotate(540deg)', offset: .50 },
    { transform: 'rotate(675deg)', offset: .625 },
    { transform: 'rotate(810deg)', offset: .75 },
    { transform: 'rotate(945deg)', offset: .875 },
    { opacity: 0, offset: .89 },
    { opacity: .99, offset: .9},
    { transform: 'rotate(1080deg)', opacity: .99, offset: 1 },
  ],
  [
    // { transform: 'rotate(0deg)', opacity: 0, offset: 0 },
    { transform: 'none', opacity: 0 },

    { transform: 'rotate(135deg)', offset: .125 },
    { opacity: 0, offset: .15 },
    { transform: 'rotate(270deg)', opacity: .99, offset: .25 },
    { transform: 'rotate(405deg)', offset: .375 },
    { transform: 'rotate(540deg)', opacity: .99, offset: .50 },
    { opacity: 0, offset: .51 },
    { transform: 'rotate(675deg)', offset: .625 },
    { transform: 'rotate(810deg)', offset: .75 },
    { transform: 'rotate(945deg)', offset: .875 },
    { transform: 'rotate(1080deg)', opacity: 0, offset: 1 },
  ],
  [
    { transform: 'none', opacity: 0 },
    { transform: 'rotate(135deg)', offset: .125 },
    { transform: 'rotate(270deg)', offset: .25 },
    { transform: 'rotate(405deg)', offset: .375 },
    { opacity: 0, offset: .40 },
    { transform: 'rotate(540deg)', opacity: .99, offset: .50 },
    { transform: 'rotate(675deg)', offset: .625 },
    { transform: 'rotate(810deg)', opacity: .99, offset: .75 },
    { opacity: 0, offset: .76 },
    { transform: 'rotate(945deg)', offset: .875 },
    { transform: 'rotate(1080deg)', opacity: 0, offset: 1 },
  ],
  [
    // { transform: 'none', opacity: 0, offset: 0 },
    { transform: 'none', opacity: 0 },

    { transform: 'rotate(135deg)', offset: .125 },
    { transform: 'rotate(270deg)', offset: .25 },
    { transform: 'rotate(405deg)', offset: .375 },
    { transform: 'rotate(540deg)', offset: .50 },
    { transform: 'rotate(675deg)', offset: .625 },
    { opacity: 0, offset: .65 },
    { transform: 'rotate(810deg)', opacity: .99, offset: .75 },
    { transform: 'rotate(945deg)', offset: .875 },
    { opacity: .99, offset: .9 },
    { transform: 'rotate(1080deg)', opacity: 0, offset: 1 },
  ],
];
const fadeInOut = [
  [
    { opacity: .99 },
    { opacity: .99, offset: .25 },
    { opacity: .0, offset: .26 },
    { opacity: .0, offset: .89 },
    { opacity: .99, offset: .90 },
    { opacity: .99, offset: 1 },
  ],
  [
    { opacity: 0 },
    { opacity: 0, offset: .15 },
    { opacity: .99, offset: .25 },
    { opacity: .99, offset: .50 },
    { opacity: 0, offset: .51 },
    { opacity: 0, offset: 1 },
  ],
  [
    { opacity: 0 },
    { opacity: 0, offset: .40 },
    { opacity: .99, offset: .50 },
    { opacity: .99, offset: .75 },
    { opacity: 0, offset: .76 },
    { opacity: 0, offset: 1 },
  ],
  [
    { opacity: 0 },
    { opacity: 0, offset: .65 },
    { opacity: .99, offset: .75 },
    { opacity: .99, offset: .90 },
    { opacity: 0, offset: 1 },
  ],    
] 