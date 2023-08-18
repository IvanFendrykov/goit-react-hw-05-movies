import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { RiPlayCircleLine } from 'react-icons/ri';
import { StyledLink } from './MoviesItem.styled';

export const MoviesItem = ({ id, title, name }) => {
  const location = useLocation();

  return (
    <li key={id}>
      <RiPlayCircleLine />{' '}
      <StyledLink to={`movies/${id}`} state={{ from: location }}>
        {title || name}
      </StyledLink>
    </li>
  );
};

MoviesItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  name: PropTypes.string,
};
