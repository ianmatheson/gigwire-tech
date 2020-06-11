import React from 'react';
import './ProjectForm.css'

class ProjectForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {formVal: ""}
  }

  handleChange = (event) => {
    this.setState({formVal: event.target.value});
  }

  handleSubmit = (event) => {
    alert('A project name was submitted: ' + this.state.formVal);
    event.preventDefault();
  }

  render() {
    return (
      <div>
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