import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Order custom doughnuts</h1>
        <h2>Place your order</h2>
        <form>
          <label htmlFor="icing">Pick your icing colour:</label>
          <input id="icing" name="icing" type="color"/>
          <label htmlFor="sprinkles">Sprinkles:</label>
          <input id="sprinkles" name="sprinkles" type="checkbox" />
          <input type="submit" />
        </form>

        <h2>Your box of doughnuts</h2>
        <p>Doughnuts go here</p>
      </div>
    );
  }
}

export default App;
