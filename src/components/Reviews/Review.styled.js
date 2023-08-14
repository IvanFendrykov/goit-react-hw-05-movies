import styled from 'styled-components';

export const Review = styled.li`
  padding: ${props => props.theme.space[3]}px;

  & strong {
    padding-bottom: ${props => props.theme.space[2]}px;
  }
`;

export const Message = styled.p`
  padding-top: ${props => props.theme.space[4]}px;
  padding-left: ${props => props.theme.space[4]}px;
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.normal};
`;
