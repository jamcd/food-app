import React, { Component } from 'react';
import FoodItem from '../components/FoodItem'
import FoodItems from '../components/FoodItems'

class FoodPlanner extends Component {
  render() {
    return (
      <div className="container">
        <div className="food-planner">
          <div className="columns">
            <div className="column food-planner__day">
              <h6 className="food-planner__title title is-6">Monday</h6>
              <FoodItem theme="dark" foodItem={FoodItems.eggs} />
              <FoodItem theme="dark" foodItem={FoodItems.hotDog} />
            </div>
            <div className="column food-planner__day">
              <h6 className="food-planner__title title is-6">Tuesday</h6>
              <FoodItem theme="dark" foodItem={FoodItems.rice} />
              <FoodItem theme="dark" foodItem={FoodItems.cereals} />
            </div>
            <div className="column food-planner__day">
              <h6 className="food-planner__title title is-6">Wednesday</h6>
              <FoodItem theme="dark" foodItem={FoodItems.coconut} />
              <FoodItem theme="dark" foodItem={FoodItems.coffee} />
            </div>
            <div className="column food-planner__day">
              <h6 className="food-planner__title title is-6">Thursday</h6>
              <FoodItem theme="dark" foodItem={FoodItems.olives} />
              <FoodItem theme="dark" foodItem={FoodItems.raspberry} />
            </div>
            <div className="column food-planner__day">
              <h6 className="food-planner__title title is-6">Friday</h6>
              <FoodItem theme="dark" foodItem={FoodItems.turkey} />
              <FoodItem theme="dark" foodItem={FoodItems.tea} />
            </div>
            <div className="column food-planner__day food-planner__day--weekend">
              <h6 className="food-planner__title title is-6">Saturday</h6>
              <FoodItem theme="dark" foodItem={FoodItems.orange} />
              <FoodItem theme="dark" foodItem={FoodItems.meat1} />
            </div>
            <div className="column food-planner__day food-planner__day--weekend">
              <h6 className="food-planner__title title is-6">Sunday</h6>
              <FoodItem theme="dark" foodItem={FoodItems.octopus} />
              <FoodItem theme="dark" foodItem={FoodItems.meat2} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FoodPlanner;
