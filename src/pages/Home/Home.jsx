import { useState, useEffect } from 'react';
import { MoviesLists } from '../../components/MoviesList/MoviesList';

import { Loader } from 'components/Loader/Loader';

import { getTrending } from 'services/movie-service';
import { HomeSection, HomeTitle } from './Home.styled';
import { GlobalStyle } from 'components/GlobalStyle';

const Home = () => {
  const [rejected, setRejected] = useState();
  const [isLoading, setIsLoading] = useState();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const MoviesList = await getTrending();
        setMovies(MoviesList);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setRejected(error.message);
      }
    })();
  }, []);

  return (
    <main>
      <HomeSection>
        <HomeTitle>Trending today</HomeTitle>

        {isLoading && <Loader />}

        {movies.length > 0 ? (
          <MoviesLists movies={movies} />
        ) : (
          isLoading === false &&
          !rejected && <div>There are no movies today...</div>
        )}

        {rejected && !isLoading && <div>{rejected}</div>}
      </HomeSection>
      <GlobalStyle />
    </main>
  );
};

export default Home;
