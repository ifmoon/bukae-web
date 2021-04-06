import { ReactNode } from 'react';

import { styled } from '../stitches.config';

const DefaultLayoutWrapper = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const LayoutInnerWrapper = styled('div', {
  width: '100%',
  height: '100%',
  maxWidth: '425px',
});

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <DefaultLayoutWrapper>
      <LayoutInnerWrapper>{children}</LayoutInnerWrapper>
    </DefaultLayoutWrapper>
  );
};

export default DefaultLayout;
