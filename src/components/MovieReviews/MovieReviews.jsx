import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/api";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    const getReviews = async () => {
      const data = await fetchMovieReviews(movieId);
      setReviews(data);
    };
    getReviews();
  }, [movieId]);

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>
              <strong>{review.author}</strong>
            </p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;

// // Импорт функции fetchMovieReviews из services/api
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { fetchMovieReviews } from "../services/api";

// const MovieReviews = () => {
//   const { movieId } = useParams();
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     if (!movieId) return;

//     const getMovieReviews = async () => {
//       try {
//         const data = await fetchMovieReviews(movieId);
//         setReviews(data);
//       } catch (error) {
//         console.error("Error fetching movie reviews:", error);
//       }
//     };

//     getMovieReviews();
//   }, [movieId]);

//   return (
//     <div>
//       {reviews.length ? (
//         <ul>
//           {reviews.map((review) => (
//             <li key={review.id}>
//               <p>Author: {review.author}</p>
//               <p>{review.content}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No reviews found for this movie.</p>
//       )}
//     </div>
//   );
// };

// export default MovieReviews;
