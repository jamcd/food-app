import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import foodApp from './reducers/food'
import App from './App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
// Imports for initial state
import FoodItems from './components/FoodItems'
import { addFood } from './actions/food'

let store = createStore(foodApp)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()

// Add some initial for testing
// TODO JM - Remove when finished
store.dispatch(addFood(FoodItems.watermelon, '200g', false))
store.dispatch(addFood(FoodItems.apple, '2', false))
store.dispatch(addFood(FoodItems.bacon))
store.dispatch(addFood(FoodItems.rice, '1kg', true))
store.dispatch(addFood(FoodItems.pancakes, '12', true))