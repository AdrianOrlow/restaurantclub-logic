import { transparentize } from 'polished';
import styled from 'styled-components';

const Input = styled.input`
  background: transparent;
  border: 0;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => transparentize(0.95, theme.colors.black)};
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.fontWeight.primary.light};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  background: rgba(255, 255, 255, 0.2);
  font-size: 1rem;
  width: 100%;
  height: 100%;
  max-width: 100%;
  min-width: 100%;

  ::placeholder {
    opacity: 0.25;
  }

  &:disabled {
    background: ${({ theme }) => transparentize(0.95, theme.colors.black)};
  }
`;

export default Input;
