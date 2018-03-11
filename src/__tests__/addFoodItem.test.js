import * as actions from '../actions/food'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const item = {
      name: 'Bacon',
      imgUri: 'uri',
      category: 'categoryName',
      cssName: 'bacon'
    }
    const quantity = 2
    const owned = false
    const expectedAction = {
      type: actions.ADD_FOOD,
      item, quantity, owned
    }
    expect(actions.addFood(item, quantity, owned)).toEqual(expectedAction)
  })
})