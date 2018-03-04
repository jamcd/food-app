import {
  ADD_FOOD,
  MOVE_FOOD,
  REMOVE_FOOD,
  // TOGGLE_FOOD
} from '../actions/food'
import { combineReducers } from 'redux'

function food (state = [], action) {
  debugger
  switch (action.type) {
    case ADD_FOOD:
      debugger
      return [
        ...state,
        {
          item: action.item,
          owned: action.owned,
          quantity: action.quantity
        }
      ]
    case MOVE_FOOD:
      return [
        ...state,
        {
          item: action.item,
          owned: action.owned,
          quantity: action.quantity
        }
      ]
    case REMOVE_FOOD:
      console.log('%c REMOVE FOOD RUN', 'color: #42b983')
      debugger
      return state.filter((food) => {
        return food.item.name !== action.name
      })
    default:
      return state
  }
}

const foodApp = combineReducers({
  food
})

export default foodApp
