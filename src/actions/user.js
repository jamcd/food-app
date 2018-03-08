export const SET_USER_NAME = 'SET_USER_NAME'
export const SET_USER_EMAIL = 'SET_USER_EMAIL'
export const SET_USER_AGE = 'SET_USER_AGE'

export function setUserName (name) {
  return { type: SET_USER_NAME, name }
}

export function setUserEmail (email) {
  return { type: SET_USER_EMAIL, email }
}

export function setUserAge (age) {
  return { type: SET_USER_AGE, age }
}
