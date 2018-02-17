import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="section">
          <div className="container">
            <h1 className="title">
              Hello World
            </h1>
            <p className="subtitle">
              My first website with <strong>Bulma</strong>!
            </p>

            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
