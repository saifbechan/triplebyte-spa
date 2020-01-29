import styled from 'styled-components';

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

  &:nth-child(-n + 16) {
    color: grey;
    &:hover {
      color: white;
    }
  }

  &:nth-child(-n + 8) {
    color: white;
    &:hover {
      color: grey;
    }
  }
`;
