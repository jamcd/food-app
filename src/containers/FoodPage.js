import React, { Component } from "react"
import FoodItems from "../components/FoodItems"
import FeaturedFoods from "../components/FeaturedFoods"

class FoodPage extends Component {
  render () {
    return [
      <section className="section" key="foods">
        <div className="container">
          <div className="columns">
            <FeaturedFoods foodItems={[FoodItems.doughnut, FoodItems.watermelon, FoodItems.salad, FoodItems.shrimp]} />
          </div>
          <div className="columns">
            <FeaturedFoods foodItems={[FoodItems.doughnut, FoodItems.watermelon, FoodItems.salad, FoodItems.shrimp]} />
          </div>
          <div className="columns">
            <FeaturedFoods foodItems={[FoodItems.doughnut, FoodItems.watermelon, FoodItems.salad, FoodItems.shrimp]} />
          </div>
          <div className="columns">
            <FeaturedFoods foodItems={[FoodItems.doughnut, FoodItems.watermelon, FoodItems.salad, FoodItems.shrimp]} />
          </div>
        </div>
      </section>
    ]
  }
}

export default FoodPage