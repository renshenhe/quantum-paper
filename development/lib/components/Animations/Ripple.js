/* @flow */
import React, { PureComponent } from 'react';
import { TransitionMotion, spring } from 'react-motion';

const leavingSpringConfig = { stiffness: 55, damping: 20 };

export default class Ripple extends PureComponent {
  static defaultProps = {
    color: 'rgba(0, 0, 0, 0.3)',
  };
  state = {
    wave: [],
    currentWaveKey: 't',
    pressed: false,
    currentKey: ''
  };
  componentDidMount() {
    const el = this.refs.ripple.getBoundingClientRect();
    this.setRippleSize(el.width, el.height)
  };

  setRippleSize = (width, height) => {
    let size;
    if (this.props.center) {
      size = (width + height) / 2;
    } else {
        size = Math.sqrt(width * width + height * height) * 2 + 2;
    }
    this.setState({ size: size })
  };
  addWave = ({clientX, clientY, currentTarget}) => {
    let offset = currentTarget.getBoundingClientRect();
    let x = clientX - offset.left;
    let y = clientY - offset.top;
    if (this.props.center) {
      x = this.props.center.width / 2;
      y = this.props.center.height / 2;
    }
    this.setState({ wave: [x, y], currentWaveKey:  Date.now().toString(), pressed: true })
  };

  removeWave = () => {
    this.setState({
      wave: [],
      currentWaveKey: '',
      pressed: false
    })
  };
  willEnter = () => {
    return {
      scale: 0,
      opacity: 1,
    };
  };
  willLeave = (styleCell: Object) => {
    return {
      ...styleCell.style,
      opacity: spring(0, leavingSpringConfig),
      scale: spring(1, leavingSpringConfig),
    }
  };

  render() {
    const { wave: [waveX, waveY], currentWaveKey, container, size } = this.state;
    const { color } = this.props;
    const styles = !this.state.pressed ? [] : [{
      key: currentWaveKey,
      style: {
        x: waveX,
        y: waveY,
        opacity: spring(1, leavingSpringConfig),
        scale: spring(1, leavingSpringConfig),
        height: size,
        width: size,
      }
    }];
    // const wrapper = this.containerShape();
    return (
      <div 
        ref='ripple' 
        style={{ width: '100%', height: '100%' }}
        onMouseDown={this.addWave}
        onMouseUp={this.removeWave}
      >
        <TransitionMotion 
          willLeave={this.willLeave} 
          willEnter={this.willEnter} 
          styles={styles}
        >
        { waves =>
          <div
          >
            {waves.map(({ key, style: { opacity, scale, x, y, height, width }}) =>
              <div
                key={key}
                style={{
                  ...rippleStyles, 
                  backgroundColor: color,
                  opacity: opacity,
                  scale: scale,
                  width: width,
                  height: height,
                  transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0) scale(${scale}`,
                  WebkitTransform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0) scale(${scale}`

                }} />
            )}
            </div>
        }
      </TransitionMotion>
    </div>
    );
  }
};

const rippleStyles = {
  borderRadius: '50%',
  backgroundColor: 'rgba(0, 0, 0, .26)',
  overflow: 'hidden',
  position: 'absolute',
  pointerEvents: 'none',
  top: '0',
  left: '0',
};
