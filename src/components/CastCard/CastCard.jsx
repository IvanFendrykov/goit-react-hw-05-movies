import filmEmptymin from 'images/filmEmptymin.jpg';
import { GoPerson } from 'react-icons/go';
import { Card, CardInfo, ImgContainer } from './CastCard.styled';
import PropTypes from 'prop-types';

const CastCard = ({ name, character, actorImg }) => {
  return (
    <Card>
      <ImgContainer>
        {actorImg ? (
          <img
            src={`https://image.tmdb.org/t/p/w200/${actorImg}`}
            alt={`actor ${name}`}
          />
        ) : (
          <img src={filmEmptymin} alt="There are no images" width={100} />
        )}
      </ImgContainer>
      <CardInfo>
        <b>
          <GoPerson /> {name}
        </b>
        <p>{`Character: ${character}`}</p>
      </CardInfo>
    </Card>
  );
};
export default CastCard;

CastCard.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  actorImg: PropTypes.string,
};
