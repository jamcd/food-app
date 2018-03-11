import reducer from '../reducers/food'

describe('Food reducers', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })
})