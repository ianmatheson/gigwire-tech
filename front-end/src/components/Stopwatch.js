import React from 'react';
import "./Stopwatch.css";

class Stopwatch extends React.Component {
  state = {
    timerOn: false,
    time: 0,
    timeStart: 0
  };

  startTimer = () => {
    console.log("in start")
    this.setState({
      timerOn: true,
      time: this.state.time,
      timeStart: Date.now() - this.state.time
    });
    this.timer = setInterval(() => {
      this.setState({
        time: Date.now() - this.state.timeStart
      });
    }, 10);
  }

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };

  populateDB = () => {
    this.setState({
      timeStart: 0,
      time: 0
    });

    //ADD mongo functionality
  };

  render() {
    const { time } = this.state;
    let centiseconds = ("0" + (Math.floor(time / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(time / 3600000)).slice(-2);
    return (
      <div className="Stopwatch">
        <div className="Stopwatch-display">
          {hours} : {minutes} : {seconds} : {centiseconds}
        </div>
        {this.state.timerOn === false && this.state.time === 0 && (
          <button className="start"><img src={require("../images/iconStart.svg")} onClick={this.startTimer} /></button>
        )}
        {this.state.timerOn === true && (
          <button className="start"><img src={require("../images/iconPause.png")} onClick={this.stopTimer} /></button>
        )}
        {this.state.timerOn === false && this.state.time > 0 && (
          <button className="start"><img src={require("../images/iconStart.svg")} onClick={this.startTimer} /></button>
        )}
        {this.state.timerOn === false && this.state.time > 0 && (
          <button className="finish" onClick={this.populateDB}>Finish!</button>
        )}
      </div>
    );
  }
}

export default Stopwatch;
