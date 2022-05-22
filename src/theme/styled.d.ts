import 'styled-components';
import breakpoints from './breakpoints';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: Record<'primary', 'sans-serif'>;
    fontWeight: {
      primary: {
        light: number;
        medium: number;
        bold: number;
      };
    };
    colors: Record<string, string>;
    breakpoints: typeof breakpoints;
  }
}
