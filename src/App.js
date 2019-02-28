import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      icing: '#000000',
      sprinkles: true,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("ordering a doughnut");
  }

  handleIcing = (e) => {
    console.log(e.target.value);
  }

  handleSprinkles = (e) => {
    console.log(e.target.checked);
  }

  render() {
    return (
      <div className="App">
        <h1>Order custom doughnuts</h1>
        <h2>Place your order</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="icing">Pick your icing colour:</label>
          <input 
            id="icing" 
            name="icing" 
            type="color" 
            value={this.state.icing}
            onChange={this.handleIcing}
          />
          <label htmlFor="sprinkles">Sprinkles:</label>
          <input 
            id="sprinkles" 
            name="sprinkles" 
            type="checkbox" 
            checked={this.state.sprinkles}
            onChange={this.handleSprinkles}  
          />
          <input type="submit" />
        </form>

        <h2>Your box of doughnuts</h2>
        <p>Doughnuts go here</p>
      </div>
    );
  }
}

export default App;
