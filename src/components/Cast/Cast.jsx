import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

import { getMovieCredits } from 'services/movie-service';
import CastCard from 'components/CastCard/CastCard';
import { CastContainer, Message } from './Cast.styled';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const [rejected, setRejected] = useState();
  const [isLoading, setIsLoading] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    try {
      setIsLoading(true);
      (async () => {
        const data = await getMovieCredits(movieId);
        setCredits(data);
        setIsLoading(false);
      })();
    } catch (error) {
      setIsLoading(false);
      setRejected(error.message);
    }
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}

      {rejected && !isLoading && <div>{rejected}</div>}

      {!isLoading && (
        <CastContainer>
          {credits.map(({ name, character, profile_path: actorImg, id }) => (
            <CastCard
              key={id}
              name={name}
              character={character}
              actorImg={actorImg}
              id={id}
            />
          ))}
        </CastContainer>
      )}
      {!isLoading && credits?.length === 0 && (
        <Message>We don`t have any cast for this movie.</Message>
      )}
    </>
  );
};

export default Cast;
