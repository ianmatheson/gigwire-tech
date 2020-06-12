import React from 'react';
import './ProjectForm.css'

class ProjectForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      formVal: "",
      time: null,
    }
  }
  
  handleChange = (event) => {
    this.setState({formVal: event.target.value});
  }

  handleSubmit = (event) => {
    alert('A project name was submitted: ' + this.state.formVal + this.state.time);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="placeholder" />
        <form onSubmit={this.handleSubmit}>
          <label>
            <input className="Form" type="text" value={this.state.value} onChange={this.handleChange} placeholder="What Project are you working on..."/>
          </label>
          <input className="Submit" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ProjectForm;