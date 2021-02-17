import { createTheme } from '@kbai/design-system';

export const theme = createTheme({
  fontFamily: {
    mainFont: 'serif',
  },
  fonts: {
    header1: {
      family: 'mainFont',
      size: 42,
      weight: 700,
      lineHeight: 54,
      letterSpacing: 0.25,
    },
    bodyBig: {
      family: 'mainFont',
      size: 24,
      weight: 400,
      lineHeight: 32,
      letterSpacing: 0.25,
    },
    body: {
      family: 'mainFont',
      size: 16,
      weight: 400,
      lineHeight: 28,
      letterSpacing: 0.25,
    },
  },
});
