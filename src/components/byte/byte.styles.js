import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const ByteContainer = styled.div`
  color: white;
  cursor: pointer;
  display: inline-block;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 5vw;
  margin: 0 3px;

  &:hover {
    color: grey;
  }

  &:nth-child(n + 9):nth-child(-n + 16) {
    color: grey;
    &:hover {
      color: white;
    }
  }
`;
