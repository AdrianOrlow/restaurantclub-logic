import { spacingY } from '@utils/stylesUtils';
import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  ${spacingY(1)};
`;

const Error404: React.FC = () => {
  return <Container>404.</Container>;
};

export default Error404;
