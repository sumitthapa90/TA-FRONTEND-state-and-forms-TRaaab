import React from "react";
import Form1 from "./From1";
import Form2 from "./Form2";
import Form3 from "./Form3";

class Master extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      firstname: "",
      lastname: "",
      date: "",
      email: "",
      address: "",
      message: "",
      checkbox1: "",
      checkbox2: "",
      checkbox3: "",
      checkbox4: "",
    };
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    var { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { firstname, lastname, date, email } = this.state;
    alert(
      `Your registration detail: \n Email: ${email} \n Firstname: ${firstname} \nLastname: ${lastname} \n Date Of Birth: ${date}`
    );
  };

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  };

  _prev = () => {
    let currentStep = this.state.currentStep;

    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  };

  previousButton = () => {
    let currentStep = this.state.currentStep;
    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary"
          type="button"
          onClick={this._prev}
        >
          Previous
        </button>
      );
    }
    // ...else return nothing
    return null;
  };

  nextButton = () => {
    let currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    if (currentStep < 3) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button"
          onClick={this._next}
        >
          Next
        </button>
      );
    }
    // ...else render nothing
    return null;
  };

  render() {
    return (
      <>
        <h1>Multi-Step-Form</h1>
        <h2>{this.state.currentStep}</h2>

        <form onSubmit={this.handleSubmit}>
          <Form1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            email={this.state.email}
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            date={this.state.date}
            address={this.state.address}
          />
          <Form2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            username={this.state.username}
            checkbox1={this.state.checkbox1}
            checkbox2={this.state.checkbox2}
          />
          <Form3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            password={this.state.password}
            checkbox3={this.state.checkbox3}
            checkbox4={this.state.checkbox4}
          />

          {this.previousButton()}
          {this.nextButton()}
        </form>
      </>
    );
  }
}

export default Master;
