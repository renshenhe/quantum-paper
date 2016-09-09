import React, { PureComponent, Component, PropTypes, Children } from 'react';
import { TransitionMotion, spring, presets } from 'react-motion';
import ReactDOM from 'react-dom';
const Wave = ({ data, style: { scale, opacity } }) => {
  console.log(data);
  return <div
    style={{
      ...data,
      WebkitTransform: `scale(${scale}, ${scale})`,
      transform: `scale3d(${scale}, ${scale}, 1)`,
      opacity
    }}
  />
}

export default class Ripple extends Component {
  constructor(props) {
    super(props)
    this.state = {
      waves: []
    }
    this._willLeave = this._willLeave.bind(this)
    this._addWave = this._addWave.bind(this)
    this._removeWave = this._removeWave.bind(this)
  }
  
  componentDidMount() {
    this._node = ReactDOM.findDOMNode(this)
    
    document.addEventListener('mouseup', this._removeWave)
    document.addEventListener('touchend', this._removeWave)
    document.addEventListener('touchcancel', this._removeWave)
  }
  
  componentWillUnmount() {
    document.removeEventListener('mouseup', this._removeWave)
    document.removeEventListener('touchend', this._removeWave)
    document.removeEventListener('touchcancel', this._removeWave)
  }
  
  _willEnter() {
    return {
      scale: 0,
      opacity: 1
    }
  }
  
  _willLeave() {
    const { rmConfig } = this.props
    return {
      scale: spring(1, rmConfig),
      opacity: spring(0, rmConfig)
    }
  }
  
  _addWave(e) {
    // bail out if a wave was already added
    if (this._isDown) return;
    
    e.stopPropagation();
    e.preventDefault();
    
    const { growRatio, center, color, rmConfig } = this.props
    const { pageX, pageY } = e.touches && e.touches[0] || e
    const { offsetWidth, offsetHeight, offsetTop, offsetLeft } = this._node
    const key = Date.now().toString()
    const waves = [...this.state.waves]
    const size = Math.max(offsetWidth, offsetHeight) * growRatio
    const halfSize = (size / 2)
    const data = {
      width: size,
      height: size,
      background: color,
      borderRadius: '100%',
      position: 'absolute'
    }
    
    this._isDown = true
    this._currentKey = key
    
    if (center) {
      data.top = offsetHeight / 2
      data.left = offsetWidth / 2
      data.marginTop = -halfSize
      data.marginLeft = -halfSize
    } else {
      data.top = (pageY - offsetTop) - halfSize
      data.left = (pageX - offsetLeft) - halfSize
    }
    
    waves.push({
      key,
      data,
      style: {
        scale: spring(1, rmConfig),
        opacity: spring(1, rmConfig)
      }
    })
    
    this.setState({ waves })
  }
  
  _removeWave() {
    if (this._isDown) {
      this.setState({
        waves: this.state.waves.filter(wave =>
          wave.key !== this._currentKey
        )
      })
      this._isDown = false
    }
  }

  render() {
    const { tag, center, color, growRatio, opacity, rmConfig, children, ...restProps } = this.props
    return (
      <this.props.tag {...restProps}>
        {children}
        <TransitionMotion
          styles={this.state.waves}
          willEnter={this._willEnter}
          willLeave={this._willLeave}
        >
          {(interpolatedWaves) =>
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                overflow: 'hidden',
                opacity
              }}
              className="react-ripple"
              onMouseDown={this._addWave}
              onTouchStart={this._addWave}
            >
              {interpolatedWaves.map(config =>
                <Wave {...config}/>
              )}
            </div>
          }
        </TransitionMotion>
      </this.props.tag>
    )
  }
}

Ripple.propTypes = {
  tag: PropTypes.string,
  center: PropTypes.bool,
  color: PropTypes.string,
  opacity: PropTypes.number,
  growRatio: PropTypes.number,
  rmConfig: React.PropTypes.objectOf(React.PropTypes.number)
}

Ripple.defaultProps = {
  tag: 'div',
  center: false,
  color: '#03c8f5',
  opacity: 0.25,
  growRatio: 2.25,
  rmConfig: { stiffness: 18, damping: 6 }
}

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Ripple tag="h1" color="#ffeee5">
//           React Paper Ripple
//         </Ripple>
        
//         <h2>Buttons</h2>
//         <section>
//           <Ripple color="#fff" className="btn">
//             Button
//           </Ripple>
//           <Ripple color="#f55c03" className="btn btn-link btn-red">
//             Link
//           </Ripple>
//         </section>
        
//         <h2>Circle Buttons</h2>
//         <section>
//           <Ripple color="#f55c03" center className="btn btn-circle btn-red">
//             <i className="icon fa fa-bomb"/>
//           </Ripple>
//           <Ripple color="#03c8f5" center className="btn btn-circle btn-blue">
//             <i className="icon fa fa-diamond"/>
//           </Ripple>
//           <Ripple color="#f55c03" center className="btn btn-circle btn-red">
//             <i className="icon fa fa-hand-peace-o "/>
//           </Ripple>
//         </section>
        
//         <h2>Menu</h2>
//         <section>
//           <div className="link-list">
//             <Ripple color="#dde2e2" className="link">Menu Link</Ripple>
//             <Ripple color="#dde2e2" className="link">Menu Link</Ripple>
//             <Ripple color="#dde2e2" className="link">Menu Link</Ripple>
//           </div>
//         </section>
        
//         <h2>Image</h2>
//         <section>
//           <Ripple color="#fff" style={{ position: 'relative' }}>
//             <img src="https://unsplash.it/400/200"/>
//           </Ripple>
//         </section>
//       </div>
//     )
//   }
// }

