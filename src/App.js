import React, { Component } from 'react';
import './App.css';
import cupcake from './img/food/cupcake.svg'
import carrot from './img/food/carrot.svg'
import butter from './img/food/butter.svg'
import jelly from './img/food/jelly.svg'
import apple from './img/food/apple.svg'
import bacon from './img/food/bacon.svg'
import banana from './img/food/banana.svg'


class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="section">
          <Header />
          <SubHeader />
        </section>
      </div>
    );
  }
}

class Header extends Component {
  render () {
    return (
      <header className="site-header cf">
        <div className="container">
          <div className="site-logo">
            <h1>
              <span className="title-span--food">food</span><span className="title-span--me">me</span><span
              className="title-span--up">up</span>
            </h1>
          </div>
          <div className="site-nav cf">
            <div className="site-nav__item">Home</div>
            <div className="site-nav__item">Food</div>
            <div className="site-nav__item">Planner
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

          <HomePage />
        </div>
      </header>
    );
  }
}

function SubHeader (props) {
  return (
    <main className="site-main">
      <div className="site-section welcome-section cf">
        <div className="container">
          <h2 className="welcome-title">Hello Jamie!</h2>
          <h4 className="welcome-message">Welcome back to foodmeup! Here are your most recently eaten foods...</h4>
        </div>
      </div>
    </main>
  );
}

class HomePage extends Component {
  render () {
    return (
      <div className="site-section cf">
        <div className="container">
          <div className="columns">

            <div className="food-item column" draggable="true">
              <div className="food-item__heading">
                <h6>Carrot</h6>
              </div>
              <div className="food-item__content">
                <img className="food-item__image" src={carrot} alt="Carrot" width="50" height="50" draggable="false" />
              </div>
            </div>

            <div className="food-item column" draggable="true">
              <div className="food-item__heading">
                <h6>Apple</h6>
              </div>
              <div className="food-item__content">
                <img className="food-item__image" src={apple} alt="Apple" width="50" height="50" draggable="false" />
              </div>
            </div>

            <div className="food-item column" draggable="true">
              <div className="food-item__heading">
                <h6>Bacon</h6>
              </div>
              <div className="food-item__content">
                <img className="food-item__image" src={bacon} alt="Bacon" width="50" height="50" draggable="false" />
              </div>
            </div>

            <div className="food-item food-item--added column" draggable="true">
              <div className="food-item__heading">
                <h6>Banana</h6>
              </div>
              <div className="food-item__content">
                <img className="food-item__image" src={banana} alt="Banana" width="50" height="50" draggable="false" />
              </div>
            </div>

            <ShoppingList />

          </div>
        </div>
      </div>
    );
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
            <h6>Shopping List</h6>
          </div>
          <div className="shopping-list__content cf">
            <p>We have generated a shopping list for you to make your recipes. Remember to delete the items that you don't need.</p>

            <h6>Fruits & Vegetables</h6>
            <div className="row">
              {this.foodToBuy.fruitVeg.map(food => {
                return (
                  <div className="col-jm-2" key={food}>
                    <ul className="cf">
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
                    <ul className="cf">
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
                <ul className="cf">
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
