import axios from 'axios';

const movieService = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjNjZWNmZWYyYzQ5NzEwYzU2MjM5YjIwZDJkN2RhNiIsInN1YiI6IjY0ZDkzNGY4YmYzMWYyMDFjZDUwMWY4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n9jwEePAsnp1aA2RVI-WKOg6tTHiLZ2VOxN7drtowP4',
  },
});

export const getTrending = async () => {
  const response = await movieService.get('trending/all/day?');
  return response.data.results;
};

export const searchMovies = async query => {
  const response = await movieService.get(`search/movie?query=${query}`);
  return response.data.results;
};

export const getMovieDetails = async movieId => {
  const response = await movieService.get(`movie/${movieId}?`);
  return response.data;
};

export const getMovieCredits = async movieId => {
  const response = await movieService.get(`movie/${movieId}/credits?`);
  return response.data.cast;
};

export const getMovieReviews = async movieId => {
  const response = await movieService.get(`movie/${movieId}/reviews?`);
  return response.data.results;
};
