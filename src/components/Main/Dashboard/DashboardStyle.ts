import { spacingY } from '@utils/stylesUtils';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1.5rem;
  margin: 1.5rem;
  border-radius: 1rem;
  border: 2px solid rgba(0, 0, 0, 0.1);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${spacingY(1)};
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: rgba(0, 0, 0, 0.1);
`;

export const Properties = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray};
`;

export const Property = styled.div`
  display: flex;
`;
