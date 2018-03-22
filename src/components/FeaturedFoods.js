import React, { Component } from "react"
import FoodItemContainer from '../containers/FoodItemContainer'

class FeaturedFoods extends Component {
  render() {
    return this.props.foodItems.map(foodItem => {
      return (
        <div className="column" key={foodItem.name}>
          <FoodItemContainer theme={this.props.theme} foodItem={foodItem} />
        </div>
      )
    })
  }
}

export default FeaturedFoods