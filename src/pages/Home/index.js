import { useEffect, useState } from "react";
import api from "../../services/api";

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
      console.log(response.data);
    }
    loadMovies();
  }, []);

  return (
    <div>
      <h1>Welcome to the Homepage</h1>
    </div>
  );
}

export default Home;
