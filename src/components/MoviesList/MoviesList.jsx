import PropTypes from 'prop-types';
import { MoviesItem } from '../MoviesItem/MoviesItem';
import { MoviesList } from './MoviesList.styled';

export const MoviesLists = ({ movies }) => {
  return (
    <MoviesList>
      {movies.map(movie => {
        return (
          <MoviesItem
            key={movie.id}
            id={movie.id}
            title={movie.title}
            name={movie.name}
          />
        );
      })}
    </MoviesList>
  );
};

MoviesLists.propTypes = {
  movies: PropTypes.array,
};
