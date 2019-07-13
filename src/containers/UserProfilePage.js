import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addFood } from '../actions/food'

class UserProfilePage extends Component {
  render () {
    return (
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddFoodClick: foodItem => dispatch(addFood(foodItem))
  }
}

UserProfilePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfilePage)

export default UserProfilePage
