/* @flow */
import React, { PureComponent } from 'react';
import { TransitionMotion, spring } from 'react-motion';

const leavingSpringConfig = { stiffness: 55, damping: 20 };

export default class Ripple extends PureComponent {
  constructor() {
    super();

    this.state = {
      mouse: [],
      now: 't' + 0,
      width: 0,
      height: 0,
      animating: false,
    }
  }
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
  handleMouseDown = ({clientX, clientY, currentTarget}) => {
    let offset = currentTarget.getBoundingClientRect();
    let x = clientX - offset.left;
    let y = clientY - offset.top;
    if (this.props.center) {
      x = this.props.center.width / 2;
      y = this.props.center.height / 2;
    }
    this.setState({ mouse: [x, y], now: 't' + Date.now(), animating: true })
  };

  handleMouseUp = () => {
    this.setState({
      mouse: [],
      now: '',
      animating: false
    })
  };
  willLeave = (styleCell: Object) => {
    // let size = this.rippleSize();
    return {
      ...styleCell.style,
      opacity: spring(0, leavingSpringConfig),
      // opacity: .87,
      scale: spring(1, leavingSpringConfig),
      // width: this.rippleSize(),
      // height: this.rippleSize(),
      // width: this.state.size,
      // height: this.state.size,
    }
  };

  // shouldComponentUpdate = (nextProps, nextState) => {
  //   return this.state.mouse !== nextState.mouse || this.state.mouse !== [];
  // };

  render() {
    const { mouse: [mouseX, mouseY], now, container, size } = this.state;
    const { color } = this.props;
    const styles = !this.state.animating ? [] : [{
      key: now,
      style: {
        x: mouseX,
        y: mouseY,
        // opacity: spring(.3),
        opacity: 1,
        scale: spring(0, leavingSpringConfig),
        height: size,
        width: size,
      }
    }];
    // const wrapper = this.containerShape();
    return (
      <div ref='ripple' style={{ width: '100%', height: '100%'}}
            onMouseDown={this.handleMouseDown}
            onMouseUp={this.handleMouseUp}

      >
        <TransitionMotion willLeave={this.willLeave} styles={styles}>
        { (ripples, i) =>
          <div
          >
            {ripples.map(({ key, style: { opacity, scale, x, y, height, width }}) =>
              <div
                key={key}
                style={Object.assign({}, staticStyles.ripple, color && { backgroundColor: color }, {
                                    opacity: opacity,
                                    scale: scale,
                                    width: width,
                                    height: height,
                                    transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0) scale(${scale}`,
                                    WebkitTransform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0) scale(${scale}`

                })} />
            )}
            </div>
        }
      </TransitionMotion>
    </div>
    );
  }
};

const staticStyles = {
  // container: {
  //   position: 'absolute',
  //   width: '100%',
  //   height: '100%',
  //   top: '0px',
  //   left: '0px',
  // },
  ripple: {
    borderRadius: '50%',
    backgroundColor: 'rgba(0, 0, 0, .26)',
    overflow: 'hidden',
    position: 'absolute',
    pointerEvents: 'none',
    top: '0px',
    left: '0px',
  }  
}
