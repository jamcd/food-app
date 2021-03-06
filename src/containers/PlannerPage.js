import React, { Component } from "react"
import FoodItems from "../components/FoodItems"
import FeaturedFoods from "../components/FeaturedFoods"
import ShoppingList from '../containers/ShoppingListContainer'
// import State from '../FakeState'

class FoodPage extends Component {
  render () {
    return [
      <section className="section" key="featured-foods">
        <div className="container">
          <div className="columns">

            <FeaturedFoods foodItems={[FoodItems.doughnut, FoodItems.watermelon, FoodItems.salad, FoodItems.shrimp]} />
          </div>
        </div>
      </section>,
      <section className="section alt-background" key="shopping-list">
        <div className="container">
          <div className="columns">
            <div className="column is-clearfix">
              <ShoppingList />
            </div>
          </div>
        </div>
      </section>
    ]
  }
}

export default FoodPage