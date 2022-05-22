import { createBreakpoint } from 'styled-components-breakpoint';

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
};

export const breakpoint = createBreakpoint(breakpoints);
export default breakpoints;
