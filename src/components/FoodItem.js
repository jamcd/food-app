import React, { Component } from 'react';

class FoodItem extends Component {
  constructor (props) {
    super(props)
    this.foodThemeName = this.props.theme ? 'food-item--' + this.props.theme + ' ' : ''
  }
  render () {
    return (
      <div className={'food-item ' + this.foodThemeName + 'food-item--' + this.props.foodItem.category } draggable="true">
        <div className="food-item__heading">
          <h6 className="title is-6">{this.props.foodItem.name}</h6>
        </div>
        <div className="food-item__content">
          <img className="food-item__image" src={this.props.foodItem.imgUri} alt={this.props.foodItem.name} width="50" height="50" draggable="false"/>
        </div>
      </div>
    )
  }
};

export default FoodItem;