import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import foodApp from './reducers/food'
import App from './App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

import { addFood, removeFood } from './actions/food'
import FoodItems from './components/FoodItems'

let store = createStore(foodApp)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// Dispatch some actions
store.dispatch(addFood(FoodItems.apple, 2))
store.dispatch(addFood(FoodItems.eggs, 5))
store.dispatch(addFood(FoodItems.cake, 10))
store.dispatch(addFood(FoodItems.meat, 15))
store.dispatch(removeFood('Apple'))
store.dispatch(removeFood('Eggs'))

// Stop listening to state updates
unsubscribe()
