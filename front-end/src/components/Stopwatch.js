import React from 'react';
import "./Stopwatch.css";
import './ProjectForm.css'
import axios from 'axios'

class Stopwatch extends React.Component {
  state = {
    timerOn: false,
    time: 0,
    timeStart: 0,
    formVal: "",
  };

  startTimer = () => {
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
    this.setState({ timerOn: false, time: this.state.time });
    clearInterval(this.timer);
  };

  putDataToDB (projectName, time) {
    axios.post('http://localhost:3001/api/putData', {
      projectName: projectName,
      time: time,
    });
  };

  populateDB(time) {
    let centiseconds = ("0" + (Math.floor(time / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(time / 3600000)).slice(-2);

    let prettyTime = hours.toString() + ":" + minutes.toString() + ":" + seconds.toString() + ":" + centiseconds.toString();
    let projectName = this.state.formVal
    // alert('A project name was submitted: ' + this.state.formVal + " " + prettyTime);

    this.putDataToDB(projectName, prettyTime);
  };

  handleChange = (event) => {
    this.setState({formVal: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.populateDB(this.state.time);
    var frm = document.getElementsByName('contact-form')[0];
    frm.reset();  // Reset all form data
    this.setState({
      timeStart: 0,
      time: 0,
      formVal: ""
    });
  }

  render() {
    const { time } = this.state;
    let seconds = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(time / 3600000)).slice(-2);
    return (
      <div>
        <div className="placeholder" />
        <form onSubmit={this.handleSubmit} name="contact-form">
          <label>
            <input className="Form" type="text" value={this.state.value} onChange={this.handleChange} placeholder="What Project are you working on..."/>
          </label>
          <input className="Submit" type="submit" value="Submit" />
        </form>
        <div className="Stopwatch">
          {hours}:{minutes}:{seconds}
        </div>
        <div>
          {this.state.timerOn === false && this.state.time === 0 && (
            <button className="start"><img src={require("../images/iconStart.svg")} onClick={this.startTimer} /></button>
          )}
          {this.state.timerOn === true && (
            <button className="start"><img src={require("../images/iconPause.png")} onClick={this.stopTimer} /></button>
          )}
          {this.state.timerOn === false && this.state.time > 0 && (
            <button className="start"><img src={require("../images/iconStart.svg")} onClick={this.startTimer} /></button>
          )}
        </div>
      </div>
    );
  }
}

export default Stopwatch;
