import styled from 'styled-components';

export const MoviesList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: ${props => props.theme.space[1]}px;
  padding-left: ${props => props.theme.space[5]}px;
  svg {
    fill: ${props => props.theme.colors.muted};
  }
`;
