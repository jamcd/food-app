import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'
import FoodItem from '../components/FoodItem'

it('renders without crashing', () => {
  shallow(<App />)
})

describe('Food Item', () => {

  // TODO JM - Fix test using Redux store
  xit('should render correctly', () => {
    const mockFoodItem = {
      name: 'Bacon',
      imgUri: 'uri',
      category: 'categoryName',
      cssName: 'bacon'
    }
    const output = shallow(
      <FoodItem foodItem={mockFoodItem} theme="dark" onAddFoodClick={jest.fn()} />
    )
    expect(output).toMatchSnapshot()
  })
})


