import { useEffect, useState } from "react";
import "./favorits.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Favorits() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem("@primeflix");
    setMovies(JSON.parse(myList) || []);
  }, []);

  function deleteMovie(id) {
    let filterMovie = movies.filter((item) => {
      return item.id !== id;
    });
    setMovies(filterMovie);
    localStorage.setItem("@primeflix", JSON.stringify(filterMovie));
    toast.success("Movie successfully removed");
  }

  return (
    <div className="my-movies">
      <h1>My movies</h1>

      {movies.length === 0 && <span>You don't have any saved movie :( </span>}

      <ul>
        {movies.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.title}</span>
              <div>
                <Link to={`/movie/${item.id}`}>Movie details</Link>
                <button onClick={() => deleteMovie(item.id)}>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favorits;
