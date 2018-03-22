import { connect } from 'react-redux'
import { removeFood, toggleFood } from '../actions/food'
import ShoppingList from '../components/ShoppingList'

const mapStateToProps = state => ({
  food: state.food
})

const mapDispatchToProps = dispatch => ({
  onRemoveClick: name => dispatch(removeFood(name)),
  onToggleClick: name => dispatch(toggleFood(name))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingList)