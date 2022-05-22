export const spacingY = (gap: number, unit = 'rem') => `
& > *:not(:first-child) {
  margin-top: ${gap}${unit};
}`;

export const spacingX = (gap: number, unit = 'rem') => `
& > *:not(:last-child) {
  margin-right: ${gap}${unit};
}`;
