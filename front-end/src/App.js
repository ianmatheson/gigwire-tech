import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Stopwatch from './components/Stopwatch.js'
import Header from './components/Header.js'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <body>
          <Stopwatch />
        </body>

      </div>
    );
  }
}

export default App;
