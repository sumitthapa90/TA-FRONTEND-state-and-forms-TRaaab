import React from "react";
import questions from "../data/data";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeQuestion: null,
    };
  }
  render() {
    let allQuestions = questions.map((Q) => Q);
    console.log(allQuestions);

    return (
      <>
        {allQuestions.map((question, i) => {
          return (
            <section className="container">
              <div key={i} className="box">
                <h2
                  className={this.state.activeQuestion === i ? "green" : "red"}
                >
                  {question.Q}
                  <i
                    onClick={() => {
                      this.setState({
                        activeQuestion:
                          this.state.activeQuestion === i ? "null" : i,
                      });
                    }}
                    className={
                      this.state.activeQuestion === i
                        ? "fas fa-angle-up"
                        : "fas fa-angle-down"
                    }
                  ></i>
                </h2>
                <p
                  className={
                    this.state.activeQuestion === i ? "visible" : "hidden"
                  }
                >
                  {question.A}
                </p>
              </div>
            </section>
          );
        })}
      </>
    );
  }
}

export default Question;
{
  /* <h2 className={this.state.activeQuestion === i ? "bg-green-500" : "bg-red-300" }>{question.Q}<i onClick={() => {
    this.setState({
       activeQuestion: this.state.activeQuestion === i ? null : i
    })
}} className={this.state.activeQuestion === i ? "fas fa-angle-up": "fas fa-angle-down"}></i></h2> */
}
