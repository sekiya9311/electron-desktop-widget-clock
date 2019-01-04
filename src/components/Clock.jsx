import * as React from 'react'

const RADIUS = 60
const PADDING = 10

export class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      intervalId: -1,
      nowDate: new Date(),
      side: 200
    }
  }
  updateClock() {
    this.setState({
      nowDate: new Date()
    })
  }
  updateCanvas() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext('2d')
    const hour = this.state.nowDate.getHours() % 12
    const minute = this.state.nowDate.getMinutes()
    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    const { side } = this.state
    const center = side / 2
    {
      // write hour hand
      ctx.beginPath()
      ctx.moveTo(center, center)
      const angle = ((2 * Math.PI) / 12) * ((hour - 3 + 12) % 12)
      ctx.lineTo(
        Math.cos(angle) * ((RADIUS * 3) / 5) + center,
        Math.sin(angle) * ((RADIUS * 3) / 5) + center
      )
      ctx.closePath()
      ctx.stroke()
    }
    {
      // write minute hand
      ctx.beginPath()
      ctx.moveTo(center, center)
      const angle = ((2 * Math.PI) / 60) * ((minute - 15 + 60) % 60)
      ctx.lineTo(
        Math.cos(angle) * ((RADIUS * 4) / 5) + center,
        Math.sin(angle) * ((RADIUS * 4) / 5) + center
      )
      ctx.closePath()
      ctx.stroke()
    }
    {
      ctx.beginPath()
      ctx.arc(center, center, RADIUS + PADDING, 0, 2 * Math.PI)
      ctx.closePath()
      ctx.stroke()
    }
  }
  componentDidMount() {
    this.updateCanvas.bind(this)()
    this.setState({
      intervalId: setInterval(this.updateClock.bind(this), 1000)
    })
  }
  shouldComponentUpdate() {
    this.updateCanvas.bind(this)()
    return false
  }
  render() {
    const { side } = this.state
    const center = side / 2
    const componentStyle = {
      width: `${side}px`,
      height: `${side}px`
    }
    return (
      <div style={componentStyle}>
        {Array.from(Array(12).keys()).map(idx => {
          return (
            <span
              style={{
                left: `${RADIUS *
                  Math.cos(((2 * Math.PI) / 12) * ((idx - 2 + 12) % 12)) +
                  center}px`,
                top: `${RADIUS *
                  Math.sin(((2 * Math.PI) / 12) * ((idx - 2 + 12) % 12)) +
                  center}px`,
                position: 'absolute'
              }}
              key={idx}
            >
              {idx + 1}
            </span>
          )
        })}
        <canvas width={side} height={side} ref="canvas" />
      </div>
    )
  }
}
