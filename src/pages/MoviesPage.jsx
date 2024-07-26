import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../services/api";
import MovieList from "../components/MovieList/MovieList";
import SearchForm from "../components/SearchForm/SearchForm";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("query") || "";

  const handleSearch = async (query) => {
    setSearchParams({ query });
    const data = await searchMovies(query);
    setMovies(data);
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <SearchForm onSearch={handleSearch} />
      {movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
};

export default MoviesPage;
