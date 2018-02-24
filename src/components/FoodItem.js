import React, { Component } from 'react';

class FoodItem extends Component {
  render () {
    return (
      <div className="food-item" draggable="true">
        <div className="food-item__heading">
          <h6>{this.props.name}</h6>
        </div>
        <div className="food-item__content">
          <img className="food-item__image" src={this.props.imgUri} alt={this.props.name} width="50" height="50" draggable="false"/>
        </div>
      </div>
    )
  }
};

export default FoodItem;
