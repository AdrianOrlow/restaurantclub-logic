import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  background: #ccc;
  position: relative;

  & > div {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const Container = styled.div`
  position: relative;
`;
