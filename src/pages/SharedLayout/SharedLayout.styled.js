import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 60px;
  box-shadow: 0 4px 2px -2px gray;
  background: ${props => props.theme.colors.background};
  padding-left: ${props => props.theme.space[5]}px;
`;

export const NavList = styled.ul`
  display: flex;
  gap: ${props => props.theme.space[6]}px;
  font-size: 28px;
  font-weight: 700;
`;

export const StyledLink = styled(NavLink)`
  color: #820000;
  &.active {
    color: orange;
    text-shadow: 4px 4px 5px rgba(192, 128, 206, 0.51);
  }
`;
