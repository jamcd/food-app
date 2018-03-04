import React from "react"

const ShoppingListItem = ({ foodItem, onRemoveClick, onToggleClick }) => {
  return (
    <div className={'shopping-list-item ' + foodItem.item.category}>
      <article className="shopping-list-item__media media">
        <figure className="media-left">
          <span className="shopping-list-item__image image">
            <img src={foodItem.item.imgUri} alt={foodItem.item.name} />
          </span>
        </figure>
        <div className="media-content">
          <div className="content">
            <div className="shopping-list-item__title">
              {foodItem.item.name}
            </div>
            <div className="shopping-list-item__content">
              <span className="shopping-list__item-weight">{foodItem.quantity}</span>
              <span className="shopping-list__action remove icon"
                    onClick={() => onRemoveClick(foodItem.item.name)}>
                <i className="fa fa-trash" />
              </span>
              {foodItem.owned ? (
                <span className="shopping-list__action toggle icon has-text-danger"
                      onClick={() => onToggleClick(foodItem.item.name)}>
                  <i className="fa fa-times" />
                </span>
              ) : (
                <span className="shopping-list__action toggle icon has-text-success"
                      onClick={() => onToggleClick(foodItem.item.name)}>
                  <i className="fa fa-check" />
                </span>
              )}
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default ShoppingListItem
