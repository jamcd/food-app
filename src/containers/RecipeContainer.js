import { connect } from 'react-redux'
import RecipesPage from './RecipesPage'

const mapStateToProps = state => ({
  food: state.food,
  recipe: state.recipe
})

export default connect(
  mapStateToProps
)(RecipesPage)