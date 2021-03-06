import {
  ADD_FOOD,
  REMOVE_FOOD,
  TOGGLE_FOOD
} from '../actions/food'

function food (state = [], action) {
  switch (action.type) {
    case ADD_FOOD:
      // Don't add the new item if it's already in the state
      if (state.findIndex(food => food.item.name === action.item.name) !== -1) return state

      return [
        ...state,
        {
          item: action.item,
          owned: action.owned ? action.owned : false,
          quantity: action.quantity ? action.quantity : '1 portion'
        }
      ]
    case TOGGLE_FOOD:
      return state.map((food) => {
        if (food.item.name === action.name) {
          return {
            ...food,
            owned: !food.owned
          }
        } else {
          return food
        }
      })
    case REMOVE_FOOD:
      return state.filter((food) => {
        return food.item.name !== action.name
      })
    default:
      return state
  }
}

export default food
