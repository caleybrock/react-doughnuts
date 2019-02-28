import React, { Component } from 'react';
import './App.css';
import Doughnut from './Doughnut';

class App extends Component {
  constructor() {
    super();
    this.state = {
      icing: '#ff8df0',
      sprinkles: true,
      orders: [{icing: '#5839ff', sprinkles: true}]
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(`ordering a doughnut with ${this.state.icing} icing`);
    const doughnut = {
      icing: this.state.icing,
      sprinkles: this.state.sprinkles,
    };
    const orders = Array.from(this.state.orders);
    orders.push(doughnut);
    this.setState({
      icing: '#ff8df0',
      sprinkles: true,
      orders: orders
    });
  }

  handleIcing = (e) => {
    this.setState({icing: e.target.value});
  }

  handleSprinkles = (e) => {
    this.setState({sprinkles: e.target.checked});
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
        <ul>
          {this.state.orders.map((doughnut, id) => {
            return (
              <Doughnut key={id} icing={doughnut.icing} sprinkles={doughnut.sprinkles} />
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;
