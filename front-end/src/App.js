import React from 'react';
import ReactDOM from 'react-dom';
import Stopwatch from './components/Stopwatch.js'
import Header from './components/Header.js'
import './App.css'
import ProjectForm from './components/ProjectForm.js';
import Arrows from './components/Arrows.js'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <body>
          <Stopwatch />
          <Arrows />
          <div className="onboarding">
            <img
              style={{width:200,height:200}}
              src={require("./images/onboardingIcon.svg")}
            />
          </div>
          <text className="text"> Get Ready To Track Your Time! </text>
        </body>

      </div>
    );
  }
}

export default App;
