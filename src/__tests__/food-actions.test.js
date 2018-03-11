import * as actions from '../actions/food'

describe('Food action creators', () => {

  it('should create an action to add a foodItem', () => {
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

  it('should create an action to remove a foodItem', () => {
    const name = 'Test'
    const expectedAction = {
      type: actions.REMOVE_FOOD,
      name
    }
    expect(actions.removeFood(name)).toEqual(expectedAction)
  })

  it('should create an action to toggle a foodItem', () => {
    const name = 'Test'
    const expectedAction = {
      type: actions.TOGGLE_FOOD,
      name
    }
    expect(actions.toggleFood(name)).toEqual(expectedAction)
  })
})