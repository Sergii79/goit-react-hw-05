import PropTypes from "prop-types";

const defaultImg =
  "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+image";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <h2>{movie.title}</h2>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : defaultImg
        }
        alt={movie.title}
        width="250"
      />
      <p>{movie.overview}</p>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
