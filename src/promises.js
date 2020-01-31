import { fetch } from "./services";
const movies = require("./data/movies.json");

export function fetchMovies() {
  return fetch(1000).then(() => movies);
}

const moviePromise = fetchMovies();
moviePromise.then(results => {
  console.log(results);
});
