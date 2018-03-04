import React, { Component } from "react"
import { connect } from 'react-redux'
import { removeFood } from '../actions/food'

let ShoppingList = ({ food, onRemoveClick }) => (
  <div className="shopping-list__container">
    <div className="shopping-list">
      <div className="shopping-list__heading">
        <h6 className="title is-6">Shopping List</h6>
      </div>
      <div className="shopping-list__content is-clearfix">
        <p>We have generated a shopping list for you to make your recipes. Remember to mark any items you already have.</p>

        <h6 className="shopping-list__title title is-6">Need to buy</h6>
        <ul className="shopping-list__list">
          {food.map(foodItem => {
            return (
              <li className={'shopping-list__item food-icon--' + foodItem.item.cssName + ' ' + foodItem.item.category} key={foodItem.item.name}>{foodItem.item.name}
                <span className="shopping-list__remove" onClick={() => onRemoveClick(foodItem.item.name)}>X</span>
                <span className="shopping-list__item-weight">10mg</span>
              </li>
            )
          })}
        </ul>

        {/*<h6 className="shopping-list__title title is-6">Already owned</h6>*/}
        {/*<ul className="shopping-list__list">*/}
          {/*{this.foodOwned.map(food => {*/}
            {/*return (*/}
              {/*<li className={'shopping-list__item food-icon--' + food.cssName + ' ' + food.category} key={food.name}>{food.name}*/}
                {/*<span className="shopping-list__item-weight">10mg</span>*/}
              {/*</li>*/}
            {/*)*/}
          {/*})}*/}
        {/*</ul>*/}

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
    onRemoveClick: name => dispatch(removeFood(name))
  }
}

ShoppingList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingList)

export default ShoppingList
