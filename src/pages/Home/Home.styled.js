import { Link } from 'react-router-dom';

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

export const MoviesList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: ${props => props.theme.space[1]}px;
  padding-left: ${props => props.theme.space[5]}px;
  svg {
    fill: ${props => props.theme.colors.muted};
  }
`;

export const StyledLink = styled(Link)`
  color: #facd6b;
  text-shadow: ${props => props.theme.shadows.textShadow};
  font-size: ${props => props.theme.fontSizes.m};
  &:hover {
    color: ${props => props.theme.colors.secondary};
    text-decoration: underline;
  }
`;
