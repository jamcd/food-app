import React from "react"
import RecipeIngredient from './RecipeIngredient'

let RecipeSummary = ({ food = [] }) => (
  <div className="recipe-summary">
    <div className="recipe-summary__heading">
      <h6 className="title is-6">Summary</h6>
    </div>
    <div className="recipe-summary__content is-clearfix">
      <p>We have generated a shopping list for you to make your recipes. Remember to mark any items you already have.</p>

      <h6 className="recipe-summary__title title is-6">Need to buy</h6>

      <div className="recipe-summary__list">
        {this.props}
        {food.reduce((filtered, foodItem) => {
          if (!foodItem.owned) {
            filtered.push((
              <RecipeIngredient foodItem={foodItem} key={foodItem.item.name} />
            ))
          }
          return filtered
        }, [])}
      </div>

      <h6 className="recipe-summary__title title is-6">Already owned</h6>

      <div className="recipe-summary__list">
        {food.reduce((filtered, foodItem) => {
          if (foodItem.owned) {
            filtered.push((
              <RecipeIngredient foodItem={foodItem} key={foodItem.item.name} />
            ))
          }
          return filtered
        }, [])}
      </div>
    </div>
  </div>
)

export default RecipeSummary
