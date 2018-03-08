import React, { Component } from 'react'
import './App.css'
import FoodItem from './components/FoodItem'
import FoodItems from './components/FoodItems'
import HomePage from './containers/HomePage'
import FoodPage from './containers/FoodPage'
import PlannerPage from './containers/PlannerPage'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { userName: 'Jamie' }
  }
  render () {
    return (
      <Router>
        <div className="App">
          <NavBar className="main-nav"/>
          <Header userName={this.state.userName}/>
          <Route exact path="/" component={HomePage}/>
          <Route path="/food" component={FoodPage}/>
          <Route path="/planner" component={PlannerPage}/>
          <footer className="site-footer">
            <div className="container">
              <p>Copyright 2016. All rights reserved
                <span className="site-footer__credit">Website created by Jamie McDonald</span>
              </p>
            </div>
          </footer>
        </div>
      </Router>
    )
  }
}

class NavBar extends Component {
  render () {
    return (
      <section className={'navbar ' + this.props.className} role="navigation">
        <div className="container">
          <div className="navbar-brand">
            <a href="/" className="navbar-item">
              <span className="title-span--food">food</span><span className="title-span--me">me</span><span className="title-span--up">up</span>
            </a>
          </div>
          <div className="navbar-menu navbar-end">
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="/food" className="navbar-item">Food</Link>
            <Link to="/planner" className="navbar-item">Planner
              <div className="main-nav__submenu">
                <div className="columns">
                  <div className="column">
                    <FoodItem foodItem={FoodItems.cupcake} />
                  </div>
                  <div className="column">
                    <FoodItem foodItem={FoodItems.carrot} />
                  </div>
                  <div className="column">
                    <FoodItem foodItem={FoodItems.butter} />
                  </div>
                  <div className="column">
                    <FoodItem foodItem={FoodItems.jelly} />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    )
  }
}

class Header extends Component {
  render () {
    return (
      <section className="hero">
        <div className="hero-body welcome-section">
          <div className="container">
            <h1 className="title welcome-title">Hello {this.props.userName}</h1>
            <h2 className="subtitle welcome-message">Welcome back to Foodmeup! Here are your most recently eaten foods...</h2>
          </div>
        </div>
      </section>
    )
  }
}

export default App
