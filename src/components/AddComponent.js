import React from "react";

class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };
  handleChangeFirstName = (e) => {
    this.setState({ title: e.target.value });
  };
  handleChangeLastName = (e) => {
    this.setState({ salary: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addJob({
      id: Math.floor(Math.random() * 100),
      name: this.state.title,
      salary: this.state.salary,
    });
  };
  render() {
    return (
      <form>
        <label htmlFor="fname">title</label> <br />
        <input
          type="text"
          value={this.state.title}
          onChange={this.handleChangeFirstName}
        ></input>
        <br />
        <label htmlFor="lname">Salary</label> <br />
        <input
          type="text"
          value={this.state.salary}
          onChange={this.handleChangeLastName}
        ></input>
        <br />
        <input type="submit" onClick={this.handleSubmit} />
      </form>
    );
  }
}
export default AddComponent;
