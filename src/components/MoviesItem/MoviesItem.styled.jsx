import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  color: #facd6b;
  text-shadow: ${props => props.theme.shadows.textShadow};
  font-size: ${props => props.theme.fontSizes.m};
  &:hover {
    color: ${props => props.theme.colors.secondary};
    text-decoration: underline;
  }
`;
