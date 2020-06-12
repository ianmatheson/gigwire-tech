import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Stopwatch from './components/Stopwatch.js'
import Header from './components/Header.js'
import './App.css'
import ProjectForm from './components/ProjectForm.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <body>
          <ProjectForm />
          <Stopwatch />
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
