import React from 'react'
import PropTypes from 'prop-types'

let FoodItem = ({ foodItem, theme, onAddFoodClick }) => (
  <div className={'food-item food-item--' + foodItem.category + (theme ? 'food-item--' + theme + ' ' : '') }
       draggable="true" onClick={() => onAddFoodClick(foodItem, 1, true)}>
    <div className="food-item__heading">
      <h6 className="title is-6">{foodItem.name}</h6>
    </div>
    <div className="food-item__content">
      <img className="food-item__image" src={foodItem.imgUri} alt={foodItem.name} width="50" height="50" draggable="false"/>
    </div>
  </div>
)

FoodItem.propTypes = {
  foodItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgUri: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    cssName: PropTypes.string.isRequired
  }),
  theme: PropTypes.string
}

export default FoodItem
