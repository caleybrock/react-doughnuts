import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Doughnut CSS Credit to:
// https://codepen.io/jnwright/pen/vRYYEQ?page=1

class Doughnut extends Component {
  static propTypes =  {
    icing: PropTypes.string,
    sprinkles: PropTypes.bool
  };

  render () {
    const description = `Doughnut with ${this.props.icing} icing${this.props.sprinkles ? ' and sprinkles' : ''}.`;
    return (
      <div role="img" aria-label={description} className="container">
        <div className="shadow"> </div>
        <div className="bread"> </div>
        <div className="frosting" style={{background: this.props.icing}}> </div>
        {this.props.sprinkles && 
          <div className="sprinkles"> </div>
        }
        <div className="hole"> </div>
        <div className="eye"> </div>
        <div className="eye right"></div>
        <div className="light"></div>
        <div className="light right"></div>
        <div className="mouth"></div>
        <div className="tongue"></div>
      </div>
    );
  }
    
};

export default Doughnut;