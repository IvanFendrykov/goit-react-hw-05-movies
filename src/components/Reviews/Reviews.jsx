import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'services/movie-service';
import { Review, Message } from './Review.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState();
  const [rejected, setRejected] = useState();
  const [isLoading, setIsLoading] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    try {
      (async () => {
        setIsLoading(true);
        const data = await getMovieReviews(movieId);
        setReviews(data);
        setIsLoading(false);
      })();
    } catch (error) {
      setIsLoading(false);
      setRejected(error.message);
    }
  }, [movieId]);

  return (
    <>
      {rejected && !isLoading && <div>{rejected}</div>}

      {!isLoading && reviews?.length > 0 && (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <Review key={id}>
              <strong>Author: {author}</strong>
              <p>{content}</p>
            </Review>
          ))}
        </ul>
      )}

      {!isLoading && reviews?.length === 0 && (
        <Message>We don`t have any reviews for this movie.</Message>
      )}
    </>
  );
};

export default Reviews;
