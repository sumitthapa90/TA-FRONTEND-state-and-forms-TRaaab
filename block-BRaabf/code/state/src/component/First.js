import React from "react";

class First extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      step: 1,
      active: 1,
    };
  }

  handleStep = (num) => {
    this.setState({
      step: num,
      active: num,
    });
  };

  handleInc = () => {
    this.setState({
      counter: this.state.counter + this.state.step,
    });
  };

  handleDec = () => {
    this.setState({
      counter: this.state.counter - this.state.step,
    });
  };

  handleReset = () => {
    this.setState({
      counter: 0,
      step: 1,
      active: 1,
    });
  };

  render() {
    return (
      <section className="sec">
        <h1>{this.state.counter}</h1>
        <h2>Steps</h2>
        <div>
          <button
            onClick={() => {
              
              this.handleStep(5);
            }}
            className={this.state.active === 5 ? "steps active" : "steps"}
          >
            5
          </button>
          <button
            onClick={() => {
              this.handleStep(10);
            }}
            className={this.state.active === 10 ? "steps active" : "steps"}
          >
            10
          </button>
          <button
            onClick={() => {
              this.handleStep(15);
            }}
            className={this.state.active === 15 ? "steps active" : "steps"}
          >
            15
          </button>
        </div>

        <div>
          <button onClick={this.handleInc}>Increment</button>
          <button onClick={this.handleDec}>Decrement</button>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      </section>
    );
  }
}
export default First;
