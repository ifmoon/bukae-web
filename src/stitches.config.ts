import { createCss } from '@stitches/react';

export const { styled, global } = createCss({
  theme: {
    colors: {
      neon: '#DDFD5B',
      black: '#000',
      white: '#fff',
    },
  },
  media: {
    mobile: '(min-width:425px)',
  },
});

const globalStyles = global({
  '*': { margin: 0, padding: 0 },
  'html, body, #root': { height: '100%' },
});

globalStyles();
