import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Doughnut extends Component {
  static propTypes = {
    icing: PropTypes.string,
    sprinkles: PropTypes.bool,
  }

  render() {
    return (
        <li>{`a doughnut with ${this.props.icing} icing. sprinkles? ${this.props.sprinkles}`}</li>
    );
  }
}

export default Doughnut;
