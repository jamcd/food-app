import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import foodApp from './reducers/food'
import App from './App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

let store = createStore(foodApp)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()