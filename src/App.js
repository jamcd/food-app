import React, { Component } from 'react';
import './App.css';
import cupcake from './img/food/cupcake.svg'
import carrot from './img/food/carrot.svg'
import butter from './img/food/butter.svg'
import jelly from './img/food/jelly.svg'
import apple from './img/food/apple.svg'
import bacon from './img/food/bacon.svg'
import banana from './img/food/banana.svg'
import FoodItem from './components/FoodItem'


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <HomePage />
      </div>
    );
  }
}

class NavBar extends Component {
  render() {
    return (
      <section className="navbar" role="navigation">
        <div className="container">
          <div className="navbar-brand">
            <a href="/" className="navbar-item">
              <span className="title-span--food">food</span><span className="title-span--me">me</span><span
              className="title-span--up">up</span>
            </a>
          </div>
          <div className="navbar-menu navbar-end">
            <div className="site-nav-item">Home</div>

            <div className="site-nav-item">Food</div>

            <div className="site-nav-item">Planner

              <div className="site-nav__submenu">
                <div className="food-item col-jm-8" draggable="true">
                  <div className="food-item__heading">
                    <h6>Cupcake</h6>
                  </div>
                  <div className="food-item__content">
                    <img className="food-item__image" src={cupcake} alt="Cupcake" width="50" height="50"
                         draggable="false"/>
                  </div>
                </div>
                <div className="food-item col-jm-8" draggable="true">
                  <div className="food-item__heading">
                    <h6>Carrot</h6>
                  </div>
                  <div className="food-item__content">
                    <img className="food-item__image" src={carrot} alt="Carrot" width="50" height="50"
                         draggable="false"/>
                  </div>
                </div>
                <div className="food-item col-jm-8" draggable="true">
                  <div className="food-item__heading">
                    <h6>Butter</h6>
                  </div>
                  <div className="food-item__content">
                    <img className="food-item__image" src={butter} alt="Butter" width="50" height="50"
                         draggable="false"/>
                  </div>
                </div>
                <div className="food-item col-jm-8" draggable="true">
                  <div className="food-item__heading">
                    <h6>Jelly</h6>
                  </div>
                  <div className="food-item__content">
                    <img className="food-item__image" src={jelly} alt="Jelly" width="50" height="50" draggable="false"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

class FeaturedFoods extends Component {
  render() {
    return [
      <div className="column">
        <FoodItem name="Carrot" imgUri={carrot} />
      </div>,
      <div className="column">
        <FoodItem name="Apple" imgUri={apple} />
      </div>,
      <div className="column">
        <FoodItem name="Bacon" imgUri={bacon} />
      </div>,
      <div className="column">
        <FoodItem name="Banana" imgUri={banana} />
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
            <h1 className="title welcome-title">Hello #NAME#</h1>
            <h2 className="subtitle welcome-message">Welcome back to foodmeup! Here are your most recently eaten foods...</h2>
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
      <section className="section">
        <div className="container">
          <div className="columns">
            <FeaturedFoods />
            <div className="column is-half">
              <ShoppingList />
            </div>
          </div>
        </div>
      </section>,
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <div className="columns">
                <FeaturedFoods />
              </div>
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
    }
    this.foodOwned = {
      fruitVeg: ['Bread', 'Rice', 'Turkey', 'Coffee', 'Pepper'],
      meat: ['hot-dog', 'hamburger', 'kebab']
    }
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

            <h6>Fruits & Vegetables</h6>
            <div className="row">
              {this.foodToBuy.fruitVeg.map(food => {
                return (
                  <div className="col-jm-2" key={food}>
                    <ul className="is-clearfix">
                      <li className={'shopping-list__item food-icon--' + food.toLowerCase()}>{food}
                        <span className="shopping-list__item-weight">10mg</span>
                      </li>
                    </ul>
                  </div>
                )
              })}
            </div>

            <h6>Meat</h6>
            <div className="row">
              {this.foodToBuy.meat.map(food => {
                return (
                  <div className="col-jm-2" key={food}>
                    <ul className="is-clearfix">
                      <li className={'shopping-list__item food-icon--' + food.toLowerCase()}>{food}
                        <span className="shopping-list__item-weight">10mg</span>
                      </li>
                    </ul>
                  </div>
                )
              })}
            </div>

            <h6>Already got these</h6>
            <div className="row">
              <div className="col-jm-1">
                <ul className="is-clearfix">
                  <li className="shopping-list__item food-icon--pepper">Pepper
                    <span className="shopping-list__item-weight">10mg</span>
                  </li>
                  <li className="shopping-list__item food-icon--coffee">Coffee
                    <span className="shopping-list__item-weight">10mg</span>
                  </li>
                  <li className="shopping-list__item food-icon--rice">Rice
                    <span className="shopping-list__item-weight">10mg</span>
                  </li>
                  <li className="shopping-list__item food-icon--turkey">Turkey
                    <span className="shopping-list__item-weight">10mg</span>
                  </li>
                  <li className="shopping-list__item food-icon--bread">Bread
                    <span className="shopping-list__item-weight">10mg</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
