import React from "react";
import faqs from "../data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeQuestion: null,
    };
  }
  render() {
    return (
      <>
        <section className="container">
          <div className="box">
            <h1>Alt Campus Questions</h1>
            <ul>
              {faqs.map((faq, i) => {
                return (
                  <li>
                    <h2
                      onClick={() =>
                        this.setState({
                          activeQuestion:
                            this.state.activeQuestion === i ? "null" : i,
                        })
                      }
                    >
                      Ques: {faq.Q}{" "}
                      {this.state.activeQuestion === i ? "Down" : "Up"}
                      {i === this.state.activeQuestion && <p>Ans:{faq.A}</p>}
                    </h2>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </>
    );
  }
}

export default App;
