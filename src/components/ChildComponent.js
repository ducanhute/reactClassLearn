import React from "react";

class ChildComponent extends React.Component {
  state = {
    isShowJob: true,
  };
  handleHideShow = () => {
    this.setState({ isShowJob: !this.state.isShowJob });
  };
  handleOnclickDelete = (job) => {
    console.log(job);
    this.props.deleteAjob(job);
  };
  render() {
    let { arrayJob } = this.props;
    let { isShowJob } = this.state;
    return (
      <div className="hihi">
        <div>
          <div onClick={this.handleHideShow}>
            {!isShowJob ? "Show" : "Hide"}
          </div>
          {isShowJob && (
            <div className="job-list">
              {arrayJob.map((item) => (
                <div key={item.id}>
                  {item.name}-{item.salary} <></>
                  <span onClick={() => this.handleOnclickDelete(item)}>X</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default ChildComponent;
