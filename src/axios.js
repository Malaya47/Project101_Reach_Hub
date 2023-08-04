import axios from "axios";

// base url to make requests to the movie database
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

// it will append this to the baseURL
// instance.get('/foo-bar');

export default instance;
