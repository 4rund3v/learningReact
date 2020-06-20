import { movie_list } from "./movie_list";

export function getMovies() {
  return movie_list;
}

export function getMovieById(movieId) {
  return movie_list.find((movie) => movie._id === movieId);
}

export function deleteMovieById(movieId) {
  let movieToDelete = movie_list.find((movie) => movie._id === movieId);
  movie_list.splice(movie_list.indexOf(movieToDelete), 1);
  return movieToDelete;
}

export function likeMovieById(movieId) {
  let movieToLike = movie_list.find((movie) => movie._id === movieId);
  movieToLike.liked = !movieToLike.liked;
}
