import { darken, transparentize } from 'polished';
import { css, DefaultTheme, keyframes } from 'styled-components';
import { Backgrounds, Sizes } from './ButtonTypes';

export const sizes: Sizes = {
  thin: css`
    height: 3rem;
    padding: 0.75rem;
    font-size: 1rem;
  `,
  middle: css`
    padding: 1rem;
    font-size: 1rem;
  `,
  large: css`
    padding: 1rem 1.25rem;
    font-size: 1.25rem;
  `,
};

const pulseFrames = (color) => keyframes`
  0% {
		box-shadow: 0 0 0 0 ${transparentize(0.3, color)};
	}

	70% {
		box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
	}

	100% {
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	}
`;

const pulse = (color) => css`
  animation: ${pulseFrames(color)} 2s infinite;
`;

export const getBackgrounds = (
  theme: DefaultTheme,
  {
    pulsating,
  }: {
    pulsating: boolean;
  }
): Backgrounds => ({
  violet: css`
    background: ${theme.colors.primary};
    color: ${theme.colors.light};
    border: none;

    &:hover {
      background: ${darken(0.0125, theme.colors.primary)};
    }

    ${pulsating && pulse(theme.colors.primary)}
  `,
});
