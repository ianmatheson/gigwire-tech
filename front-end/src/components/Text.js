import React from 'react';
import './Text.css'

class Text extends React.Component {
  render() {
    return (
      <div>
          <text className="text1"> Enter your Project name. </text>
          <text className="text2"> Click to start tracking your time. </text>
      </div>
    );
  }
}

export default Text;