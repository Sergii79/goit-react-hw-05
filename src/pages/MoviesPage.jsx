import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../services/api";
import SearchForm from "../components/SearchForm/SearchForm";
import MovieList from "../components/MovieList/MovieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  // Выполняем поиск при изменении query
  useEffect(() => {
    const getMovies = async () => {
      if (query) {
        const data = await searchMovies(query);
        setMovies(data);
      } else {
        setMovies([]);
      }
    };
    getMovies();
  }, [query]);

  const handleSearch = (query) => {
    setSearchParams({ query });
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <SearchForm onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
