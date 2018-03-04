export const ADD_FOOD = 'ADD_FOOD'
export const REMOVE_FOOD = 'REMOVE_FOOD'
export const TOGGLE_FOOD = 'TOGGLE_FOOD'

export function addFood (item, quantity, owned) {
  return { type: ADD_FOOD, item, quantity, owned }
}

export function removeFood (name) {
  return { type: REMOVE_FOOD, name }
}

export function toggleFood (name) {
  return { type: TOGGLE_FOOD, name }
}