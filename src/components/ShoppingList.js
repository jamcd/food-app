import React from "react"
import { connect } from 'react-redux'
import { removeFood, toggleFood } from '../actions/food'
import ShoppingListItem from './ShoppingListItem'

let emptyMessage = 'You don\'t need any items. You\'re good to go!'
let emptyOwnedMessage = 'You don\'t own any items.'

let ShoppingList = ({ food, onRemoveClick, onToggleClick }) => (
  <div className="shopping-list__container">
    <div className="shopping-list">
      <div className="shopping-list__heading">
        <h6 className="title is-6">Shopping List</h6>
      </div>
      <div className="shopping-list__content is-clearfix">
        <p>We have generated a shopping list for you to make your recipes. Remember to mark any items you already have.</p>

        <h6 className="shopping-list__title title is-6">Need to buy</h6>
        <div className="shopping-list__list">
          {food.filter(item => !item.owned).length === 0 ? emptyMessage : ''}
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
        <div className="shopping-list__list">
          {food.filter(item => item.owned).length === 0 ? emptyOwnedMessage : ''}
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
  </div>
)

const mapStateToProps = state => {
  return {
    food: state.food
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRemoveClick: name => dispatch(removeFood(name)),
    onToggleClick: name => dispatch(toggleFood(name))
  }
}

ShoppingList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingList)

export default ShoppingList
