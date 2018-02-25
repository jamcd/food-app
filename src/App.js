import React, { Component } from 'react';
import './App.css';
import cupcake from './img/food/cupcake.svg'
import carrot from './img/food/carrot.svg'
import butter from './img/food/butter.svg'
import jelly from './img/food/jelly.svg'
import apple from './img/food/apple.svg'
import bacon from './img/food/bacon.svg'
import banana from './img/food/banana.svg'
import hamburger from './img/food/hamburguer-1.svg'
import FoodItem from './components/FoodItem'
import NutrientTable from './components/NutrientTable'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { userName: 'Jamie' };
  }
  render() {
    return (
      <div className="App">
        <NavBar className="main-nav"/>
        <Header userName={this.state.userName}/>
        <HomePage />
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
              <span className="title-span--food">food</span><span className="title-span--me">me</span><span
              className="title-span--up">up</span>
            </a>
          </div>
          <div className="navbar-menu navbar-end">
            <a className="site-nav-item navbar-item">Home</a>

            <a className="site-nav-item navbar-item">Food</a>

            <a className="site-nav-item navbar-item">Planner

              <div className="site-nav__submenu">
                <div className="food-item col-jm-8" draggable="true">
                  <div className="food-item__heading">
                    <h6 className="title is-6">Cupcake</h6>
                  </div>
                  <div className="food-item__content">
                    <img className="food-item__image" src={cupcake} alt="Cupcake" width="50" height="50"
                         draggable="false"/>
                  </div>
                </div>
                <div className="food-item col-jm-8" draggable="true">
                  <div className="food-item__heading">
                    <h6 className="title is-6">Carrot</h6>
                  </div>
                  <div className="food-item__content">
                    <img className="food-item__image" src={carrot} alt="Carrot" width="50" height="50"
                         draggable="false"/>
                  </div>
                </div>
                <div className="food-item col-jm-8" draggable="true">
                  <div className="food-item__heading">
                    <h6 className="title is-6">Butter</h6>
                  </div>
                  <div className="food-item__content">
                    <img className="food-item__image" src={butter} alt="Butter" width="50" height="50"
                         draggable="false"/>
                  </div>
                </div>
                <div className="food-item col-jm-8" draggable="true">
                  <div className="food-item__heading">
                    <h6 className="title is-6">Jelly</h6>
                  </div>
                  <div className="food-item__content">
                    <img className="food-item__image" src={jelly} alt="Jelly" width="50" height="50" draggable="false"/>
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

class FeaturedFoods extends Component {
  render() {
    return [
      <div className="column" key="Carrot">
        <FoodItem name="Carrot" theme={this.props.theme} imgUri={carrot} />
      </div>,
      <div className="column" key="Apple">
        <FoodItem name="Apple" theme={this.props.theme} imgUri={apple} />
      </div>,
      <div className="column" key="Bacon">
        <FoodItem name="Bacon" theme={this.props.theme} imgUri={bacon} />
      </div>,
      <div className="column" key="Banana">
        <FoodItem name="Banana" theme={this.props.theme} imgUri={banana} />
      </div>
    ]
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

// function SubHeader (props) {
//   return (
//
//   );
// }

class HomePage extends Component {
  render () {
    return [
      <section className="section" key="foods">
        <div className="container">
          <div className="columns">
            <FeaturedFoods />
            <div className="column is-half">
              <ShoppingList />
            </div>
          </div>
        </div>
      </section>,
      <section className="section alt-background" key="foods-dark">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <div className="columns">
                <FeaturedFoods theme="dark" />
              </div>
            </div>
          </div>
        </div>
      </section>,
      <section className="section" key="nutrient-table">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <NutrientTable />
            </div>
          </div>
        </div>
      </section>
    ];
  }
}

class ShoppingList extends Component {
  constructor (props) {
    super(props);
    this.state = { food: [] };
    this.foodToBuy = {
      fruitVeg: ['Bread', 'Rice', 'Turkey', 'Coffee', 'Pepper'],
      meat: ['hot-dog', 'hamburger', 'kebab']
    };
    this.foodOwned = ['Bread', 'Rice', 'Turkey', 'Coffee', 'Pepper', 'hot-dog', 'hamburger', 'kebab']
  };

  // Lifecycle hooks
  componentDidMount() {
  }
  componentWillUnmount() {
  }

  render () {
    return (
      <div className="shopping-list__container">
        <div className="shopping-list">
          <div className="shopping-list__heading">
            <h6 className="title is-6">Shopping List</h6>
          </div>
          <div className="shopping-list__content is-clearfix">
            <p>We have generated a shopping list for you to make your recipes. Remember to delete the items that you don't need.</p>

            <h6 className="shopping-list__title title is-6">Fruits & Vegetables</h6>
            <ul className="shopping-list__list">
              {this.foodToBuy.fruitVeg.map(food => {
                return (
                  <li className={'shopping-list__item food-icon--' + food.toLowerCase()} key={food}>{food}
                    <span className="shopping-list__item-weight">10mg</span>
                  </li>
                )
              })}
            </ul>

            <h6 className="shopping-list__title title is-6">Meat</h6>
            <ul className="shopping-list__list">
              {this.foodToBuy.meat.map(food => {
                return (
                  <li className={'shopping-list__item food-icon--' + food.toLowerCase()} key={food}>{food}
                    <span className="shopping-list__item-weight">10mg</span>
                  </li>
                )
              })}
            </ul>

            <h6 className="shopping-list__title title is-6">Already got these</h6>
            <ul className="shopping-list__list">
              {this.foodOwned.map(food => {
                return (
                  <li className={'shopping-list__item food-icon--' + food.toLowerCase()} key={food}>{food}
                    <span className="shopping-list__item-weight">10mg</span>
                  </li>
                )
              })}
            </ul>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
