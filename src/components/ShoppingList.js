import React from "react"
import ShoppingListItem from './ShoppingListItem'

let emptyMessage = 'You don\'t need any items. You\'re good to go!'
let emptyOwnedMessage = 'You don\'t own any items.'

let ShoppingList = ({ food, isSidePanel, onRemoveClick, onToggleClick }) => (
  <div className={'shopping-list' + (isSidePanel ? ' shopping-list--side-panel' : '')}>
    <div className="shopping-list__heading">
      <h6 className="title is-6">Shopping List</h6>
    </div>
    <div className="shopping-list__content is-clearfix">
      <p>We have generated a shopping list for you to make your recipes. Remember to mark any items you already have.</p>

      <h6 className="shopping-list__title title is-6">Need to buy</h6>
      {food.filter(item => !item.owned).length === 0 ? emptyMessage : ''}

      <div className="shopping-list__list">
        {food.reduce((filtered, foodItem) => {
          if (!foodItem.owned) {
            filtered.push((
              <ShoppingListItem foodItem={foodItem} onRemoveClick={onRemoveClick} onToggleClick={onToggleClick} key={foodItem.item.name} />
            ))
          }
          return filtered
        }, [])}
      </div>

      <h6 className="shopping-list__title title is-6">Already owned</h6>
      {food.filter(item => item.owned).length === 0 ? emptyOwnedMessage : ''}

      <div className="shopping-list__list">
        {food.reduce((filtered, foodItem) => {
          if (foodItem.owned) {
            filtered.push((
              <ShoppingListItem foodItem={foodItem} onRemoveClick={onRemoveClick} onToggleClick={onToggleClick} key={foodItem.item.name} />
            ))
          }
          return filtered
        }, [])}
      </div>
    </div>
  </div>
)

export default ShoppingList
