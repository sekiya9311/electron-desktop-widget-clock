import * as React from 'react'

const WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export class Calendar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nowDate: new Date()
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ nowDate: new Date() })
    }, 1000)
  }
  render() {
    const today = this.state.nowDate
    const year = today.getFullYear()
    const month = today.getMonth()
    const day = today.getDate()
    const week = today.getDay()
    const days = []
    for (
      let w = 0, d = new Date(year, month, 1);
      d.getMonth() === month || d.getDay() !== 0;
      (d.getDate() > 1 || d.getDay() === w) && d.setDate(d.getDate() + 1),
        w = (w + 1) % 7
    ) {
      if (w === 0) {
        days.push([])
      }
      if (d.getMonth() === month && (d.getDate() > 1 || d.getDay() === w)) {
        days[days.length - 1].push(d.getDate())
      } else {
        days[days.length - 1].push(-1)
      }
    }
    return (
      <div>
        <table border="1">
          <thead>
            <tr>
              {WEEK.map(e => (
                <th key={e}>{e}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {days.map((weekDays, idx) => (
              <tr key={idx}>
                {weekDays.map((d, idx) => (
                  <td key={`${idx},${d},${idx}`}>{d === -1 ? '' : d}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
