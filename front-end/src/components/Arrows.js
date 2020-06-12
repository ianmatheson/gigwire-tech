import React from 'react';
import './Arrows.css'

class Arrows extends React.Component {
  render() {
    return (
      <div>
        <div className="arrow1">
          <img 
            src={require("../images/curvy.png")}
            alt=""
          />
        </div>
        <div className="arrow2">
          <img 
            src={require("../images/curvy2.png")}
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default Arrows;