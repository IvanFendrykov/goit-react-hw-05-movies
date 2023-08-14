import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { FcFilmReel } from 'react-icons/fc';
import { BiSearchAlt } from 'react-icons/bi';

import { searchMovies } from 'services/movie-service';
import {
  MoviesSection,
  InputField,
  Btn,
  Form,
  MoviesList,
  StyledLink,
} from './Movies.styled';
import { GlobalStyle } from 'components/GlobalStyle';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  const query = searchParams.get('query');

  useEffect(() => {
    try {
      if (!query) return;
      (async () => {
        const data = await searchMovies(query);
        setMovies(data);
      })();
    } catch (error) {}
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    setSearchParams(query ? { query } : {});
    e.target.reset();
  };

  return (
    <main>
      <MoviesSection>
        <Form onSubmit={handleSubmit}>
          <InputField type="text" name="query" placeholder="Movie search" />
          <Btn type="submit">
            <BiSearchAlt />
            Search
          </Btn>
        </Form>
        <MoviesList>
          {movies.map(({ title, id }) => (
            <li key={id}>
              <FcFilmReel />{' '}
              <StyledLink to={`${id}`} state={{ from: location }}>
                {title}
              </StyledLink>
            </li>
          ))}
        </MoviesList>
      </MoviesSection>
      <GlobalStyle />
    </main>
  );
};

export default Movies;
