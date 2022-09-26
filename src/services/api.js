import axios from "axios";

//Base  da URL: https://api.themoviedb.org/3/
//URL DA API: https://api.themoviedb.org/3/movie/550?api_key=5bebc0d87ffec1997ff48dbbc3bc98ce

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
