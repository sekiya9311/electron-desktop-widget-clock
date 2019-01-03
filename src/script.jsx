require('babel-register')

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Calendar } from './components/Calendar'
import { Clock } from './components/Clock'

ReactDOM.render(
  <div>
    <Calendar />
    <Clock />
  </div>,
  document.getElementById('app')
)
