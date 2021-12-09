import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Reducer } from './redux/reducer.js'

const events = createStore(Reducer)

ReactDOM.render(
  <Provider store={events}>
    <App />
  </Provider>,
  document.getElementById('root')
)
