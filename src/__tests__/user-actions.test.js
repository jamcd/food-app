import * as actions from '../actions/user'

describe('User action creators', () => {

  it('should create an action to set a user name', () => {
    const name = 'John Doe'
    const expectedAction = {
      type: actions.SET_USER_NAME,
      name
    }
    expect(actions.setUserName(name)).toEqual(expectedAction)
  })

  it('should create an action to set a user email', () => {
    const email = 'Test'
    const expectedAction = {
      type: actions.SET_USER_EMAIL,
      email
    }
    expect(actions.setUserEmail(email)).toEqual(expectedAction)
  })

  it('should create an action to set a user age', () => {
    const age = '30'
    const expectedAction = {
      type: actions.SET_USER_AGE,
      age
    }
    expect(actions.setUserAge(age)).toEqual(expectedAction)
  })
})