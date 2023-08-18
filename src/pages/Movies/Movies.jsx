import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';
import { MoviesLists } from '../../components/MoviesList/MoviesList';

import { searchMovies } from 'services/movie-service';
import { MoviesSection, InputField, Btn, Form } from './Movies.styled';
import { GlobalStyle } from 'components/GlobalStyle';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

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
        <MoviesLists movies={movies} />
      </MoviesSection>
      <GlobalStyle />
    </main>
  );
};

export default Movies;
