import { useHistory, useParams } from 'react-router';

import { styled } from '../stitches.config';

const MainWrapper = styled('div', {
  width: '100%',
  height: '100%',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const HeaderButton = styled('button', {
  backgroundColor: 'transparent',
  borderStyle: 'none',
});

const EditHeaderWrapper = styled('div', {
  backgroundColor: '$neon',
  width: '100%',
  height: 56,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: 'solid 3px $black',
});

const getEditHeaderTitle = (phase: string) => {
  switch (phase) {
    case '1':
      return '컨셉 선택';
    case '2':
      return '이름 설정';
    case '3':
      return '명함 꾸미기';
  }
};

const EditContentsWrapper = styled('div', {
  width: '100%',
  boxSizing: 'border-box',
  padding: 20,
});

const DescriptionText = styled('p', {
  color: '#333',
  fontFamily: 'Noto Sans KR, sans-serif',
  margin: '12px 0px',
});

const ConceptsWrapper = styled('div', {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: 12,
  alignItems: 'center',
  justifyItems: 'center',
});

const ConceptItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const ConceptButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 16,
  fontSize: 24,
  backgroundColor: '#f2f2f2',
  border: 'solid 2px #bdbdbd',
  borderRadius: 20,
  margin: '4px 0px',
});

const Edit = () => {
  const { phase } = useParams<{ phase: string }>();
  const { goBack } = useHistory();

  return (
    <MainWrapper>
      <EditHeaderWrapper>
        <HeaderButton
          css={{ visibility: phase === '1' ? 'hidden' : 'visible' }}
          onClick={() => {
            goBack();
          }}
        >
          <img src="/Left.svg" alt="뒤로가기" />
        </HeaderButton>
        step{phase}. {getEditHeaderTitle(phase)}
        <HeaderButton>
          <img src="/Cancel.svg" alt="취소" />
        </HeaderButton>
      </EditHeaderWrapper>
      <EditContentsWrapper>
        <DescriptionText>당신의 부캐는 어떤 컨셉인가요?</DescriptionText>
        <ConceptsWrapper>
          <ConceptItem>
            <ConceptButton>👖</ConceptButton>
            패션
          </ConceptItem>
        </ConceptsWrapper>
      </EditContentsWrapper>
    </MainWrapper>
  );
};

export default Edit;
