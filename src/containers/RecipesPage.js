import React, { Component } from "react"
import RecipeSummary from '../components/RecipeSummary'

class RecipesPage extends Component {
  render () {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <RecipeSummary food={this.props.food}/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default RecipesPage