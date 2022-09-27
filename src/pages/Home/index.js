import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "5bebc0d87ffec1997ff48dbbc3bc98ce",
          language: "pt-BR",
          page: 1,
        },
      });
      //console.log(response.data.results.slice(0, 10));
      setMovies(response.data.results.slice(0, 10));
    }
    loadMovies();
  }, []);

  return (
    <div className="container">
      <div className="lista-filmes">
        {movies.map((movie) => {
          return (
            <article key={movie.id}>
              <strong>{movie.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
              />
              <Link to={`/movie/${movie.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
