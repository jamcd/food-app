import React, { Component } from 'react'
import RecipeSummary from '../components/RecipeSummary'

class Recipe extends Component {
  render () {
    return (
      <div className="container">
        <div className="recipe">
          <div className="columns">
            <RecipeSummary food={this.props.food} />



          </div>
        </div>
      </div>
    )
  }
}

export default Recipe