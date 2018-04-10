import { combineReducers } from 'redux'
import {
  SELECT_RECIPE,
  REQUEST_RECIPE,
  INVALIDATE_RECIPE,
  RECEIVE_RECIPE
} from '../actions/recipes'

// NOTE JM - https://daveceddia.com/what-is-a-thunk/
// NOTE JM - Great resource on what a 'thunk' is and why it's useful

function selectedRecipe (state = 'reactjs', action) {
  switch (action.type) {
    case SELECT_RECIPE:
      return action.recipe
    default:
      return state
  }
}

function recipes (state = {
  isFetching: false,
  didInvalidate: false,
  items: [] // TODO JM - Is this needed?
}, action) {
  switch (action.type) {
    case INVALIDATE_RECIPE:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_RECIPE:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_RECIPE:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.recipes,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function recipesByFoodItem (state, action) {
  switch (action.type) {
    case INVALIDATE_RECIPE:
    case RECEIVE_RECIPE:
    case REQUEST_RECIPE:
      return Object.assign({}, state, {
        [action.food]: recipes(state[action.food], action) // NOTE JM - Bear in mind this only merges part of the state
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  selectedRecipe,
  recipesByFoodItem
})

export default rootReducer