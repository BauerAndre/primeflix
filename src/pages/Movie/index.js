import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./movie-info.css";
import api from "../../services/api";

function Movie() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovie() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "5bebc0d87ffec1997ff48dbbc3bc98ce",
            language: "pt-BR",
          },
        })
        .then((response) => {
          setMovie(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.log("MOVIE NOT FOUND");
          navigate("/", { replace: true });
          return;
        });
    }
    loadMovie();

    return () => {
      console.log("Componente desmontado");
    };
  }, [navigate, id]);

  if (loading) {
    return (
      <div>
        <h1>Loading details...</h1>
      </div>
    );
  }

  return (
    <div className="filme-info">
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={movie.title}
      />
      <h3>Overview</h3>
      <span>{movie.overview}</span>

      <strong>Rating: {movie.vote_average} / 10</strong>

      <div className="area-buttons">
        <button>Save</button>
        <button>
          <a
            target="_blank"
            rel="external"
            href={`https://youtube.com/results?search_query=${movie.title} Trailer`}
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}

export default Movie;
