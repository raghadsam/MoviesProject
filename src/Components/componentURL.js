/*import React, { useState } from "react";

const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const path = "discover/movie";

export const constructUrl = (query, path) => {
  return `${TMDB_BASE_URL}/${path}?api_key=${api_key}&query=${query}`;
};

export default function fetchMovies() {
  const [movies, setMovies] = useState([]);
  return (
<div>{
fetch(constructUrl(query, path))
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data.results);
      setMovies(data.results);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  </div>

  )
  
}
*/
