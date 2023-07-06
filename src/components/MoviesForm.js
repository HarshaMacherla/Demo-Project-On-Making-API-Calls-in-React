import React, { useRef } from "react";
import styles from "./MoviesForm.module.css";

const MoviesForm = () => {
  const titleRef = useRef();
  const openingTextRef = useRef();
  const releaseDateRef = useRef();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newMovie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    console.log(newMovie);

    titleRef.current.value = "";
    openingTextRef.current.value = "";
    releaseDateRef.current.value = "";
  };

  return (
    <form onSubmit={handleFormSubmit} className={styles.form}>
      <label htmlFor="title">Title</label>
      <input id="title" name="Title" type="text" ref={titleRef} />

      <label htmlFor="opening-text">Opening Text</label>
      <input
        id="opening-text"
        name="OpeningText"
        type="text"
        ref={openingTextRef}
      />

      <label htmlFor="release-date">Release Date</label>
      <input
        id="release-date"
        name="ReleaseDate"
        type="text"
        ref={releaseDateRef}
      />

      <button type="submit">Add Movie</button>
    </form>
  );
};

export default MoviesForm;
