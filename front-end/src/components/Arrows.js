import React from 'react';
import './Arrows.css'

class Arrows extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    this.setState({isLoading: false})
  }

  render() {
    return (
      <div>
        <div className="arrow1">
          {this.state.isLoading} <img 
            src={require("../images/curvy.png")}
            alt=""
          />
          <img 
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