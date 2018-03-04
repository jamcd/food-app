export const ADD_FOOD = 'ADD_FOOD'
export const MOVE_FOOD = 'MOVE_FOOD'
export const REMOVE_FOOD = 'REMOVE_FOOD'
// export const TOGGLE_FOOD = 'TOGGLE_FOOD'

export function addFood (item, quantity, owned) {
  debugger
  return { type: ADD_FOOD, item, quantity, owned }
}

export function moveFood (index) {
  return { type: REMOVE_FOOD, index }
}

export function removeFood (name) {
  return { type: REMOVE_FOOD, name }
}

// export function toggleFood (index) {
//   return { type: TOGGLE_FOOD, index }
// }