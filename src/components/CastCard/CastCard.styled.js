import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: ${props => props.theme.shadows.boxShadow};
  width: 205px;
  height: 360px;

  & img {
    width: 205px;
  }
`;

export const ImgContainer = styled.div`
  height: 308px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: ${props => props.theme.shadows.boxShadow};
`;

export const CardInfo = styled.div`
  padding: 5px 10px;
  overflow: auto;

  & b {
    margin-bottom: ${props => props.theme.space[2]}px;
  }
`;
