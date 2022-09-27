import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api";

function Movie() {
  const { id } = useParams();
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
        });
    }
    loadMovie();

    return () => {
      console.log("Componente desmontado");
    };
  }, []);

  return (
    <div>
      <h1>Acessando o filme {id}</h1>
    </div>
  );
}

export default Movie;
