import styled from 'styled-components';
import filmmin from 'images/filmmin.jpg';

export const HomeSection = styled.section`
  height: 575px;
  background-image: url(${filmmin});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: ${props => props.theme.space[4]}px;
  padding-bottom: ${props => props.theme.space[4]}px;
`;

export const HomeTitle = styled.h2`
  text-align: center;
  font-family: Robto;
  font-size: ${props => props.theme.fontSizes.l};
  color: ${props => props.theme.colors.accent};
`;
