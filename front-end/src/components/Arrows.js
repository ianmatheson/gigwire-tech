import React from 'react';
import './Arrows.css'

class Arrows extends React.Component {
  render() {
    return (
      <div>
        <div className="arrow1">
          <img 
            src={require("../images/curvy.png")}
          />
        </div>
        <div className="arrow2">
          <img 
            src={require("../images/curvy2.png")}
          />
        </div>
      </div>
    );
  }
}

export default Arrows;