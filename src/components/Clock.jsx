import * as React from 'react'

const RADIUS = 100
const PADDING = 5

export class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      intervalId: setInterval(this.updateClock.bind(this), 1000),
      nowDate: new Date(),
      width: RADIUS * 2 + PADDING * 2,
      height: RADIUS * 2 + PADDING * 2
    }
  }
  updateClock() {
    this.setState({
      nowDate: new Date()
    })
  }
  render() {
    const componentStyle = {
      width: `${this.state.width}px`,
      height: `${this.state.height}px`
    }
    return (
      <div style={componentStyle}>
        {Array.from(Array(12).keys()).map(idx => {
          return (
            <span
              style={{
                left: `${RADIUS *
                  Math.cos(((2 * Math.PI) / 12) * ((idx - 2 + 12) % 12)) +
                  RADIUS +
                  PADDING}px`,
                top: `${RADIUS *
                  Math.sin(((2 * Math.PI) / 12) * ((idx - 2 + 12) % 12)) +
                  RADIUS +
                  PADDING}px`,
                position: 'absolute'
              }}
              key={idx}
            >
              {idx + 1}
            </span>
          )
        })}
      </div>
    )
  }
}
