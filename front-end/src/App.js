import React from 'react';
import Stopwatch from './components/Stopwatch.js'
import Header from './components/Header.js'
import './App.css'
import Arrows from './components/Arrows.js'
import Text from './components/Text.js'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <body>
          <Stopwatch />
          <div>
            <Arrows />
            <Text />
          </div>
          <div className="onboarding">
            <img
              style={{width:200,height:200}}
              src={require("./images/onboardingIcon.svg")}
              alt=""
            />
          </div>
          <text className="text"> Get Ready To Track Your Time! </text>
        </body>
      </div>
    );
  }
}

export default App;
