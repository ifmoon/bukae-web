import { useEffect } from 'react';
import { useHistory } from 'react-router';

import { styled } from '../stitches.config';

const SplashWrapper = styled('div', {
  width: '100%',
  height: '100%',
  backgroundColor: '$neon',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const SubTitle = styled('p', { fontSize: 16 });
const MainTitle = styled('p', { fontSize: 18, fontWeight: 'bold' });
const Logo = styled('img', { padding: 8 });

const Splash = () => {
  const { replace } = useHistory();

  useEffect(() => {
    setTimeout(() => {
      replace('/main');
    }, 3000);
  }, [replace]);

  return (
    <SplashWrapper>
      <SubTitle>취미계의 링크드인</SubTitle>
      <MainTitle>부캐 전문 명함 서비스</MainTitle>
      <Logo src="/BU-KAE.svg" alt="logo" />
    </SplashWrapper>
  );
};

export default Splash;
