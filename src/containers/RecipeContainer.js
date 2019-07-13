import { connect } from 'react-redux'
import RecipesPage from './RecipesPage'
import { fetchRecipes } from '../actions/recipes'

const mapStateToProps = state => ({
  food: state.food,
  recipe: state.recipe
})

const mapDispatchToProps = state => ({
  loadRecipes: state.dispatch(fetchRecipes()),
  recipe: state.recipe
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesPage)