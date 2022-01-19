import React from "react";

class Model extends React.Component {
  render() {
    let movie = this.props;
    return (
      <>
        <div>
          <h2> TITLE: {movie.Title}</h2>
          <h2> RELEASED-DATE: {movie.Released}</h2>
          <h2> GENRE: {movie.Genre}</h2>
          <h2>DIRECTOR: {movie.Director}</h2>
          <h2>ACTOR: {movie.Actors}</h2>
          <h2>PLOT: {movie.Plot}</h2>
          <h2> IMBD: {movie.imdbRating}</h2>
          <h2> LANGUAGE: {movie.Language}</h2>

          {/* <div>
            {movie.Images.map((img, i) => (
              <div key={i}>
                <img src={img} alt={movie.Title} />
              </div>
            ))}
          </div> */}
        </div>
      </>
    );
  }
}

export default Model;
