import styled from 'styled-components';

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 200px;
`;

export const CastContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.space[4]}px;
  padding-top: ${props => props.theme.space[4]}px;
`;
export const Message = styled.p`
  padding-top: ${props => props.theme.space[4]}px;
  padding-left: ${props => props.theme.space[4]}px;
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.normal};
`;
