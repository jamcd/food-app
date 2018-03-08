import React, { Component } from "react"
import FoodItem from './FoodItem'

class FeaturedFoods extends Component {
  render() {
    return this.props.foodItems.map(foodItem => {
      return (
        <div className="column" key={foodItem.name}>
          <FoodItem theme={this.props.theme} foodItem={foodItem} />
        </div>
      )
    })
  }
}

export default FeaturedFoods