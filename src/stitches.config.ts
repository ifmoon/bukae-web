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
  '*': {
    margin: 0,
    padding: 0,
    fontFamily: 'GmarketSansMedium, serif',
    fontSize: 14,
  },
  'html, body, #root': { height: '100%' },
  '@font-face': {
    fontFamily: 'GmarketSansMedium',
    src:
      'url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff") format("woff")',
    fontWeight: 400,
    fontStyle: 'normal',
  },
});

globalStyles();
