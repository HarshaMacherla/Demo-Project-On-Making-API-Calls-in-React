import React from "react";

import classes from "./Movie.module.css";

const Movie = (props) => {
  return (
    <li className={classes.movie} key={props.id}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button
        onClick={() => props.onDelete(props.id)}
        style={{ backgroundColor: "yellow", color: "purple" }}
      >
        Delete Movie
      </button>
    </li>
  );
};

export default Movie;
