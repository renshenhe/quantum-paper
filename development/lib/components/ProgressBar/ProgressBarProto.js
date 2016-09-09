/* @flow */

import React, { PureComponent } from 'react';

function getStyles(props, state) {
  const { progress, buffer, auxBar } = state;
  const { barHeight } = props;
  const styles = {
    container: {
      position: 'relative',
      height: barHeight,
      transition: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1)',
      width: '100%',
      maxWidth: '100%',
      transform: (progress === '100%') && 'scaleY(0)',
      // backgroundColor: '#b3d4fc',
      overflow: 'hidden',
    },
    bar: {
      position: 'absolute',
      top: '0',
      bottom: '0',
      width: '0%',
      transition: 'width 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    progressBar: {
      position: 'absolute',
      top: '0',
      left: '0',
      bottom: '0',
      width: '100%',
      // transition: 'width 200ms cubic-bezier(0.4, 0, 0.2, 1)',      
      // backgroundColor: 'rgb(63,81,181)',
      zIndex: '1',
      transformOrigin: 'left',

    },
    progress: {
      position: 'absolute',
      top: '0',
      left: '0',
      bottom: '0',
      width: '100%',
      backgroundColor: 'rgb(63,81,181)',
      zIndex: '1',
      transformOrigin: 'left',
    },
    bufferBar: {
      position: 'absolute',
      top: '0',
      bottom: '0',
      width: buffer,
      transition: 'width 200ms cubic-bezier(0.4, 0, 0.2, 1)',
      backgroundImage: 
        `linear-gradient(to right, rgba(255, 255, 255, .7),
          rgba(255, 255, 255, .7)), linear-gradient(to right, #3f51b5, #3f51b5)`,
      zIndex: '0',
      left: '0',
      // backgroundColor: '#3f51b5',
      // backgroundImage: 'none',
    },
    auxBar: {
      position: 'absolute',
      top: '0',
      right: '0',
      bottom: '0',
      // transition: 'width 200ms cubic-bezier(0.4, 0, 0.2, 1)',
      width: auxBar,
      backgroundImage: 
        `linear-gradient(to right, rgba(255, 255, 255, .7),
          rgba(255, 255, 255, .7)), linear-gradient(to right, #3f51b5, #3f51b5)`,
      // backgroundImage: 'linear-gradient(to right,rgba(255,255,255,.7),rgba(255,255,255,.7)),linear-gradient(to right,#3f51b5 ,#3f51b5)',
      // backgroundImage: 'linear-gradient(to right,rgba(255,255,255,.7),rgba(255,255,255,.7)),linear-gradient(to right,#3f51b5 ,#3f51b5)',    
      // backgroundImage: 'linear-gradient(to right, rgba(255,255,255, 0.9), rgba(255,255,255, 0.9)), linear-gradient(to right, rgb(63,81,181), rgb(63,81,181))',
      WebkitMask: `url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=")`,
      mask: `url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=")`,
    
    },
    dashed: {
      // zIndex: '2',
      height: barHeight,
      width: auxBar,
      position: 'absolute',
      background: 'radial-gradient(rgb(169, 192, 233) 0%, rgb(169, 192, 233) 16%, transparent 42%)',
      backgroundSize: '10px 10px',
      backgroundPosition: '0px -23px',
      right: '0',
    }
  };

  return styles;
};

const setProgress = (progress, buffer) => {
  console.log('progress received for setProgress', progress)
  return {
    buffer: `${buffer}%`,
    auxBar: `${100 - buffer}%`,
    progress: `${progress}%`
  }
}

export default class Prototype extends PureComponent {
  static defaultProps = {
    buffer: 100,
    progress: 0,
    barHeight: '4px',
  };
  state = {
    buffer: 100,
    auxBar: 0,
    progress: 0,
  };
  componentWillMount() {
    this.handleProgressUpdate(this.props.progress, this.props.buffer);
  }
  componentDidMount() {
    if (this.props.type === 'buffer') {
      this.refs.auxBar.animate(bufferKeyframes, bufferAnimationConfig);
    } else {
      this.refs.progressBar.animate(firstIndeterminate, indeterminateConfig)
      this.refs.progress.animate(progressBarKeyframes, indeterminateConfig)

    }
  }
  componentWillReceiveProps({ progress, buffer }) {
    this.handleProgressUpdate(progress, buffer);
  }
  handleProgressUpdate = (p, b) => {
    const { buffer, auxBar, progress } = setProgress(p, b);
    this.setState({ buffer, auxBar, progress })    
  };
  render() {
    const style = getStyles(this.props, this.state);

    return (
      <div
        style={style.container}
      >
        <div ref='progressBar' style={style.progressBar}>
          <div ref='progress' style={style.progress} />
        </div>
        <div ref='bufferBar' style={style.bufferBar} />
        {
          this.props.type === 'buffer' 
            && <div ref='auxBar' style={style.dashed} />
        }
      </div>
    );
  }
};
const indeterminateConfig = {
  duration: 2000,
  easing: 'linear',
  iterations: Infinity,
}
// const firstIndeterminate = [
//   { transform: 'translate3d(0%, 0, 0)', transform: 'scaleX(0)', offset: 0 },
//   { transform: 'translate3d(0%, 0, 0)', transform: 'scaleX(.75)', offset: .25 },
//   { transform: 'translate3d(100%, 0, 0)', transform: 'scaleX(0)', offset: .50 },
//   { transform: 'translate3d(0%, 0, 0)', transform: 'scaleX(0)', offset: 1 },
// ];

const progressBarKeyframes = [
  { transform: 'scaleX(0)' },
  { transform: 'scaleX(.75)' },
  { transform: 'scaleX(0)' },
  { transform: 'scaleX(0)' },
]
// const firstIndeterminate = [
//   { transform: 'translate3d(0%, 0, 0)', transform: 'scaleX(0)', offset: 0 },
//   { transform: 'translate3d(0%, 0, 0)', transform: 'scaleX(.75)', offset: .50 },
//   { transform: 'translate3d(0%, 0, 0)', transform: 'scaleX(0)', offset: .75 },
//   { transform: 'translate3d(100%, 0, 0)', transform: 'scaleX(0)', offset: 1 },
// ]
// const firstIndeterminate = [
//   { transform: 'translate3d(-100%, 0, 0)', transform: 'scaleX(0.2)', offset: 0 },
//   { transform: 'translate3d(-40%, 0, 0)', transform: 'scaleX(.2)', offset: .20 },
//   { transform: 'translate3d(0%, 0, 0)', transform: 'scaleX(0.5)', offset: .30 },
//   { transform: 'translate3d(100%, 0, 0)', transform: 'scaleX(0.7)', offset: .55 },
//   { transform:'scaleX(0)', offset: .5599 },
//   { transform: 'translate3d(-100%, 0, 0)', transform: 'scaleX(0.7)', offset: .56 },
//   { transform: 'translate3d(-100%, 0, 0)', transform: 'scaleX(0.7)', offset: .5699 },
//   { transform: 'translate3d(-5%, 0, 0)', transform: 'scaleX(0.7)', offset: .75 },
//   { transform: 'translate3d(30%, 0, 0)', transform: 'scaleX(0.7)', offset: .85 },
//   { transform: 'translate3d(100%, 0, 0)', transform: 'scaleX(0.7)', offset: .98 },
//   { transform: 'scaleX(0)', offset: .9999 },
//   { transform: 'translate3d(-100%, 0, 0)', offset: 1 },

// ]
const firstIndeterminate = [
  { transform: 'translate3d(0%, 0, 0)',  offset: 0 },
  { transform: 'translate3d(25%%, 0, 0)',  offset: .25 },
  { transform: 'translate3d(150%, 0, 0)',  offset: .50 },
  { transform: 'translate3d(0%, 0, 0)',  offset: 1 },
]
// const firstIndeterminate = [
//   { left: '0%', width: '0%', },
//   { left: '25%', width: '75%', },
//   { left: '100%', width: '0%', },
//   { left: '0%', width: '0%', },

// ]
const secondIndeterminate = [
  { left: '0%', width: '0%', offset: 0 },
  { left: '0%', width: '0%', offset: .5 },
  { left: '0%', width: '25%', offset: .75 },
  { left: '100%', width: '0%', offset: 1 },

]
const bufferAnimationConfig = {
  duration: 2000,
  easing: 'linear',
  iterations: Infinity,
};
const bufferKeyframes = [
  { opacity: 1, 'backgroundPosition': '0px -23px', offset: 0 },
  { opacity: 0, offset: .50 },
  { opacity: 1, 'backgroundPosition': '-200px -23px', offset: 1 }
];