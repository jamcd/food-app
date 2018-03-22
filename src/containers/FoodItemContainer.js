import { connect } from 'react-redux'
import { addFood } from '../actions/food'
import FoodItem from '../components/FoodItem'

const mapStateToProps = state => {
  return {
    food: state.food
  }
}

const mapDispatchToProps = dispatch => ({
  onAddFoodClick: foodItem => dispatch(addFood(foodItem))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodItem)