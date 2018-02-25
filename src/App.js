import React, { Component } from 'react';
import './App.css';
import FoodItem from './components/FoodItem'
import FoodItems from './components/FoodItems'
import HomePage from './containers/HomePage'

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      userName: 'Jamie',

      // TODO JM - Introduce Redux

      shoppingList: {
        needed: [
          FoodItems.ham,
          FoodItems.salad,
          FoodItems.sorbet,
          FoodItems.fish,
          FoodItems.shrimp,
          FoodItems.orange,
          FoodItems.aubergine,
          FoodItems.raspberry,
          FoodItems.fries,
          FoodItems.eggs,
          FoodItems.flour,
          FoodItems.apple,
          FoodItems.turkey,
          FoodItems.salmon,
          FoodItems.kebab,
          FoodItems.noodles,
          FoodItems.pasta
        ],
        owned: [
          FoodItems.garlic,
          FoodItems.gingerbread,
          FoodItems.milk,
          FoodItems.mushrooms,
          FoodItems.octopus,
          FoodItems.honey,
          FoodItems.hotDog,
          FoodItems.rice,
          FoodItems.watermelon
        ]
      }
    };
  }
  render() {
    return (
      <div className="App">
        <NavBar className="main-nav"/>
        <Header userName={this.state.userName}/>
        <HomePage shoppingList={this.state.shoppingList} />
        <footer className="site-footer">
          <div className="container">
            <p>Copyright 2016. All rights reserved
              <span className="site-footer__credit">Website created by Jamie McDonald</span>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

class NavBar extends Component {
  render() {
    return (
      <section className={'navbar ' + this.props.className} role="navigation">
        <div className="container">
          <div className="navbar-brand">
            <a href="/" className="navbar-item">
              <span className="title-span--food">food</span><span className="title-span--me">me</span><span className="title-span--up">up</span>
            </a>
          </div>
          <div className="navbar-menu navbar-end">
            <a className="navbar-item">Home</a>
            <a className="navbar-item">Food</a>
            <a className="navbar-item">Planner
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
            </a>
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
    );
  }
}

export default App;
