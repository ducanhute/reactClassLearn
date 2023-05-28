import React from "react";
import AddComponent from "./AddComponent";
import ChildComponent from "./ChildComponent";

class MyAllComponets extends React.Component {
  state = {
    arrayJob: [
      { id: 1, name: "IT", salary: 500 },
      { id: 2, name: "Web", salary: 600 },
      { id: 3, name: "Mobile", salary: 700 },
    ],
  };
  addJob = (job) => {
    this.setState({ arrayJob: [...this.state.arrayJob, job] });
  };
  deleteAjob = (job) => {
    let currentJob = this.state.arrayJob;
    currentJob = currentJob.filter((item) => item.id !== job.id);
    this.setState({ arrayJob: currentJob });
  };

  render() {
    return (
      <div className="all">
        <AddComponent addJob={this.addJob} />
        <ChildComponent
          arrayJob={this.state.arrayJob}
          deleteAjob={this.deleteAjob}
        />
      </div>
    );
  }
}
export default MyAllComponets;
