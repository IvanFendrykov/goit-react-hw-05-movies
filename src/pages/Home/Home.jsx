import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { RiPlayCircleLine } from 'react-icons/ri';

import { getTrending } from 'services/movie-service';
import { HomeSection, HomeTitle, StyledLink, MoviesList } from './Home.styled';
import { GlobalStyle } from 'components/GlobalStyle';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [rejected, setRejected] = useState();
  const [isLoading, setIsLoading] = useState();
  const location = useLocation();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const data = await getTrending();
        setTrendingMovies(data);
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

        {trendingMovies.length > 0 ? (
          <MoviesList>
            {trendingMovies.map(({ title, id, name }) => (
              <li key={id}>
                <RiPlayCircleLine />{' '}
                <StyledLink to={`movies/${id}`} state={{ from: location }}>
                  {title || name}
                </StyledLink>
              </li>
            ))}
          </MoviesList>
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
