import { Link } from 'react-router-dom';
import styled from 'styled-components';
import filmSearchmin from 'images/filmSearchmin.jpg';

export const MoviesSection = styled.section`
  height: 575px;
  background-image: url(${filmSearchmin});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: ${props => props.theme.space[4]}px;
  padding-bottom: 15 ${props => props.theme.space[4]}px;
  padding-left: ${props => props.theme.space[5]}px;
`;

export const Form = styled.form`
  display: flex;
`;

export const InputField = styled.input`
  height: 22px;
  width: 300px;
  border-radius: 5px;
  margin-right: ${props => props.theme.space[2]}px;
  margin-bottom: ${props => props.theme.space[4]}px;
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 16px;
  height: 26px;
  width: 80px;
  border-radius: 5px;
  cursor: pointer;

  & svg {
    height: 18px;
    width: 18px;
  }

  &:hover {
    background-color: #edd068;
  }
`;

export const MoviesList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: ${props => props.theme.space[2]}px;
`;

export const StyledLink = styled(Link)`
  font-weight: 500;
  color: #362d17;
  text-shadow: 1px 1px 1px #fdff70;
  font-size: 20px;
  &:hover {
    color: #cc2b16;
    text-decoration: underline;
  }
`;
