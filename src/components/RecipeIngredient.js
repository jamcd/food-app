import React from "react"

const RecipeIngredient = ({ foodItem }) => {
  return (
    <div className={'recipe-ingredient ' + foodItem.item.category}>
      <article className="recipe-ingredient__media media">
        <figure className="media-left">
          <span className="recipe-ingredient__image image">
            <img src={foodItem.item.imgUri} alt={foodItem.item.name} />
          </span>
        </figure>
        <div className="media-content">
          <div className="content">
            <div className="recipe-ingredient__title">
              {foodItem.item.name}
            </div>
            <div className="recipe-ingredient__content">
              <span className="shopping-list__item-weight">{foodItem.quantity}</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default RecipeIngredient
