import { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import {
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieReviews,
} from "@services/api";
import MovieCard from "../components/MovieCard/MovieCard";
import MovieReviews from "../components/MovieReviews/";

const defaultImg =
  "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [backLink, setBackLink] = useState("/");

  useEffect(() => {
    const getMovieDetails = async () => {
      if (!movieId) return;
      const movieData = await fetchMovieDetails(movieId);
      setMovie(movieData);
      setBackLink(location.state?.from ?? "/");
    };
    getMovieDetails();
  }, [movieId, location.state]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <Link to={backLink}>Back</Link>
      <MovieCard movie={movie} />
      <h3>Cast</h3>
      {/* Display movie credits here */}
      <h3>Reviews</h3>
      <MovieReviews />
    </div>
  );
};

export default MovieDetailsPage;
