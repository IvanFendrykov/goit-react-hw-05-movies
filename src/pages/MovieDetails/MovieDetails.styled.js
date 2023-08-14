import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieDetailsSection = styled.div`
  padding: ${props => props.theme.space[4]}px;
`;

export const BtnBack = styled(Link)`
  border: 2px solid black;
  border-radius: 5px;
  font-size: ${props => props.theme.fontSizes.m};
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100px;
  background-color: ${props => props.theme.colors.background};
  color: #820000;
  margin-bottom: ${props => props.theme.space[3]}px;

  &:hover {
    box-shadow: 1px 2px 2px 2px gray;
  }
`;

export const MovieInfoContainer = styled.div`
  display: flex;
  padding-bottom: ${props => props.theme.space[3]}px;
  box-shadow: 0 4px 2px -2px gray;

  & div {
    display: flex;
    flex-direction: column;
    row-gap: ${props => props.theme.space[4]}px;
  }
`;

export const ImgContainer = styled.div`
  margin-right: ${props => props.theme.space[4]}px;

  & img {
    width: 200px;
  }
`;

export const AdditionalInfo = styled.div`
  padding-left: ${props => props.theme.space[5]}px;
  padding-top: ${props => props.theme.space[4]}px;
  padding-bottom: ${props => props.theme.space[3]}px;
  box-shadow: 0 4px 2px -2px gray;

  & h3 {
    margin-bottom: ${props => props.theme.space[3]}px;
  }

  & ul {
    padding-left: ${props => props.theme.space[4]}px;
    list-style: circle;
    font-size: 18px;
    font-weight: 500;
  }
`;

export const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  font-size: 18px;

  &:hover {
    color: #d41b11;
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;
`;
