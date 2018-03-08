import React, { Component } from "react"
import FoodItems from "../components/FoodItems"
import FoodItem from '../components/FoodItem'

class FoodPage extends Component {
  render () {
    return [
      <section className="section" key="foods">
        <div className="container">
          <div className="food-index">
            {Object.keys(FoodItems).map(item => <FoodItem theme={this.props.theme} foodItem={FoodItems[item]} key={item} />)}
          </div>
        </div>
      </section>
    ]
  }
}

export default FoodPage