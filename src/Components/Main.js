import MovieGrid from "./MovieGrid.js";
import "../App.css";
export default function Main(props) {
  return (
    <div>
      <MovieGrid movies={props.movies} />
    </div>
  );
}

