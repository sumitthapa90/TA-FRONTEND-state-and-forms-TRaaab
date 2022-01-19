import React from "react";
import data from "../data.json";
import Model from "./Model";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
      selectedIndex: null,
      modelClose: false,
    };
  }

  handleClick = (index) => {
    this.setState({
      selectedIndex: index,
      modelClose: false,
    });
  };

  handleMouseOver = (i) => {
    this.setState({
      activeIndex: i,
    });
  };

  handleMouseLeave = (i) => {
    this.setState({
      activeIndex: null,
    });
  };

  render() {
    return (
      <>
        <section className="card-sec">
          {data.map((movie, i) => {
            return (
              <div
                className="card"
                key={i}
                onMouseOver={() => this.handleMouseOver(i)}
                onMouseLeave={() => this.handleMouseLeave(i)}
              >
                <div>
                  <img src={movie.Poster} alt={movie.Title} />
                </div>
                <h2>{movie.Title}</h2>
                <p>{movie.Released}</p>

                {this.state.activeIndex === i ? (
                  <button onClick={() => this.handleClick(i)}>More Info</button>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </section>

        <section className="close-modal">
          <div className="close-btn">
            <button
              className="close"
              onClick={() =>
                this.setState({
                  selectedIndex: null,
                  modelClose: true,
                })
              }
            >
              Close
            </button>
          </div>

          {this.state.selectedIndex ? (
            <Model {...data[this.state.selectedIndex]} state={false} />
          ) : (
            ""
          )}
        </section>
      </>
    );
  }
}

export default Card;
