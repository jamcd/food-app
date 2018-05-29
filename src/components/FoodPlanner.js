import React, { Component } from 'react'
import FoodItemContainer from '../containers/FoodItemContainer'
import FoodItems from '../components/FoodItems'

class FoodPlanner extends Component {
  render() {
    return (
      <div className="container">
        <div className="food-planner">
          <div className="columns">
            <div className="column food-planner__day">
              <h6 className="food-planner__title title is-6">Monday</h6>
              <FoodItemContainer theme="dark" foodItem={FoodItems.eggs} />
              <FoodItemContainer theme="dark" foodItem={FoodItems.hotDog} />
            </div>
            <div className="column food-planner__day">
              <h6 className="food-planner__title title is-6">Tuesday</h6>
              <FoodItemContainer theme="dark" foodItem={FoodItems.rice} />
              <FoodItemContainer theme="dark" foodItem={FoodItems.cereals} />
            </div>
            <div className="column food-planner__day">
              <h6 className="food-planner__title title is-6">Wednesday</h6>
              <FoodItemContainer theme="dark" foodItem={FoodItems.coconut} />
              <FoodItemContainer theme="dark" foodItem={FoodItems.coffee} />
            </div>
            <div className="column food-planner__day">
              <h6 className="food-planner__title title is-6">Thursday</h6>
              <FoodItemContainer theme="dark" foodItem={FoodItems.olives} />
              <FoodItemContainer theme="dark" foodItem={FoodItems.raspberry} />
            </div>
            <div className="column food-planner__day">
              <h6 className="food-planner__title title is-6">Friday</h6>
              <FoodItemContainer theme="dark" foodItem={FoodItems.turkey} />
              <FoodItemContainer theme="dark" foodItem={FoodItems.tea} />
            </div>
            <div className="column food-planner__day food-planner__day--weekend">
              <h6 className="food-planner__title title is-6">Saturday</h6>
              <FoodItemContainer theme="dark" foodItem={FoodItems.orange} />
              <FoodItemContainer theme="dark" foodItem={FoodItems.meat1} />
            </div>
            <div className="column food-planner__day food-planner__day--weekend">
              <h6 className="food-planner__title title is-6">Sunday</h6>
              <FoodItemContainer theme="dark" foodItem={FoodItems.octopus} />
              <FoodItemContainer theme="dark" foodItem={FoodItems.meat2} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FoodPlanner
