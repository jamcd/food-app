import React from "react"
import FoodItems from "../components/FoodItems"
import FeaturedFoods from "../components/FeaturedFoods"
import ShoppingList from '../containers/ShoppingListContainer'
import FoodPlanner from '../components/FoodPlanner'
import NutrientTable from '../components/NutrientTable'

  const HomePage = ({ food }) => [
  <section className="section" key="foods">
    <div className="container">
      <div className="columns">
        <FeaturedFoods foodItems={[FoodItems.doughnut, FoodItems.watermelon, FoodItems.salad, FoodItems.shrimp]} />
        <div className="column is-half">
          <ShoppingList shoppingList={food} isSidePanel={true} />
        </div>
      </div>
    </div>
  </section>,
  <section className="section alt-background" key="foods-dark">
    <div className="container">
      <div className="columns">
        <div className="column is-half">
          <div className="columns">
            <FeaturedFoods theme="dark" foodItems={[FoodItems.asparagus, FoodItems.fish, FoodItems.fries, FoodItems.tomato]} />
          </div>
        </div>
      </div>
    </div>
  </section>,
  <section className="section" key="nutrient-table">
    <div className="container">
      <div className="columns">
        <div className="column is-half">
          <NutrientTable />
        </div>
      </div>
    </div>
  </section>,
  <section className="section alt-background food-planner-section" key="food-planner">
    <FoodPlanner />
  </section>
]

export default HomePage