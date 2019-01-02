import * as React from 'react';

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalId: 0,
      isAm: true,
      nowDate: new Date(),
      width: 300,
      height: 300
    };
  }
  updateClock() {
    const now = new Date();
  }
  render() {
    const pxStr = val => `${val}px`;
    const makeStyle = (left, top) => ({
      left: pxStr(left),
      top: pxStr(top)
    });
    const componentStyle = {
      width: pxStr(this.state.width),
      height: pxStr(this.state.height)
    };
    return (
      <div style={componentStyle}>
        <span
          style={makeStyle(
            (this.state.width / 6) * 3,
            (this.state.height / 6) * 0
          )}
        >
          12
        </span>
        <span
          style={makeStyle(
            (this.state.width / 6) * 2,
            (this.state.height / 6) * 1
          )}
        >
          11
        </span>
        <span
          style={makeStyle(
            (this.state.width / 6) * 4,
            (this.state.height / 6) * 1
          )}
        >
          1
        </span>
        <span
          style={makeStyle(
            (this.state.width / 6) * 1,
            (this.state.height / 6) * 2
          )}
        >
          10
        </span>
        <span
          style={makeStyle(
            (this.state.width / 6) * 5,
            (this.state.height / 6) * 2
          )}
        >
          2
        </span>
        <span
          style={makeStyle(
            (this.state.width / 6) * 0,
            (this.state.height / 6) * 3
          )}
        >
          9
        </span>
        <span
          style={makeStyle(
            (this.state.width / 6) * 6,
            (this.state.height / 6) * 3
          )}
        >
          3
        </span>
        <span
          style={makeStyle(
            (this.state.width / 6) * 1,
            (this.state.height / 6) * 4
          )}
        >
          8
        </span>
        <span
          style={makeStyle(
            (this.state.width / 6) * 5,
            (this.state.height / 6) * 4
          )}
        >
          4
        </span>
        <span
          style={makeStyle(
            (this.state.width / 6) * 2,
            (this.state.height / 6) * 5
          )}
        >
          7
        </span>
        <span
          style={makeStyle(
            (this.state.width / 6) * 5,
            (this.state.width / 6) * 5
          )}
        >
          5
        </span>
        <span
          style={makeStyle(
            (this.state.width / 6) * 6,
            (this.state.height / 6) * 6
          )}
        >
          6
        </span>
      </div>
    );
  }
}
