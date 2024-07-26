import axios from "axios";

// Ваш API Token
const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTYxMmRjYTYxZjlmZTUxM2I5NTM1ZjZkMGIzMGJkZSIsIm5iZiI6MTcyMTkxNjc5Ni45NjE5MTQsInN1YiI6IjY2YTI1OTUyYzA0NjRmNTllZTYxMjM1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E5kXzfveSZZzQlmCUqQyYhVKxRNTUFdiKUR5a6MN4M0";

// Создание экземпляра axios с базовыми настройками
const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

// Функции для получения данных

// Получение списка популярных фильмов
export const fetchTrendingMovies = async () => {
  const response = await axiosInstance.get("/trending/movie/day");
  return response.data.results;
};

// Поиск фильмов по запросу
export const searchMovies = async (query) => {
  const response = await axiosInstance.get("/search/movie", {
    params: { query, include_adult: false },
  });
  return response.data.results;
};

// Получение деталей фильма
export const fetchMovieDetails = async (movieId) => {
  const response = await axiosInstance.get(`/movie/${movieId}`);
  return response.data;
};

// Получение актерского состава фильма
export const fetchMovieCredits = async (movieId) => {
  const response = await axiosInstance.get(`/movie/${movieId}/credits`);
  return response.data.cast;
};

// Получение отзывов о фильме
export const fetchMovieReviews = async (movieId) => {
  const response = await axiosInstance.get(`/movie/${movieId}/reviews`);
  return response.data.results;
};
