import React from "react";
import { useParams } from "react-router-dom";
export default function MoviePage() {
  const { id } = useParams();
  function handleMovies(query, path) {
    fetch("http://localhost:3000/movies/" + id)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="movie">
      <img
        src={
          poster_path
            ? IMG_API + poster_path
            : "https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289__340.jpg"
        }
        alt={title}
      />

      <div className="movie-info">
        <h3>{title}</h3>
        <span>{vote_average}</span>
      </div>

      <div className="movie-over">
        <h2>Overview:</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
}
