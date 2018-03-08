import {
  SET_USER_NAME,
  SET_USER_EMAIL,
  SET_USER_AGE
} from '../actions/user'

function user (state = {}, action) {
  switch (action.type) {
    case SET_USER_NAME:
      return Object.assign({}, state, {
        name: action.name
      })
    case SET_USER_EMAIL:
      return Object.assign({}, state, {
        email: action.email
      })
    case SET_USER_AGE:
      return Object.assign({}, state, {
        age: action.age
      })
    default:
      return state
  }
}

export default user