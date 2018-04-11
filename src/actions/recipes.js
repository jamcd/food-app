import { fetchRecipesFromDB } from '../api/index'

export const SELECT_RECIPE = 'SELECT_RECIPE'
export const INVALIDATE_RECIPE = 'INVALIDATE_RECIPE'
export const REQUEST_RECIPE = 'REQUEST_RECIPE'
export const RECEIVE_RECIPE = 'RECEIVE_RECIPE'

export function selectRecipe (recipe) {
  return {
    type: SELECT_RECIPE,
    recipe
  }
}

export function invalidateRecipe (recipe) {
  return {
    type: INVALIDATE_RECIPE,
    recipe
  }
}

export function requestRecipe (recipe) {
  return {
    type: REQUEST_RECIPE,
    recipe
  }
}

export function receiveRecipe (recipe, json) {
  return {
    type: RECEIVE_RECIPE,
    recipe,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export function fetchRecipes (recipe) {
  return dispatch => {
    dispatch(requestRecipe(recipe))
    return fetchRecipesFromDB(500).then(json => dispatch(receiveRecipe(recipe, json)))
  }
}

// TODO JM - Implement error action for requests