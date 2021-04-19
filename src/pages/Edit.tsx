import { useCallback, useState } from 'react';
import { useHistory, useParams } from 'react-router';

import Concepts from '../components/Concepts';
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

const getPhaseContents = (
  phase: string,
  newCard: Card,
  setNewCard: (card: Card) => void,
) => {
  switch (phase) {
    case '1':
      return <Concepts newCard={newCard} setNewCard={setNewCard} />;
  }
};

export type Card = Partial<{
  id: number;
  concepts: string;
  name: string;
  nickname: string;
  profileImageType: string;
  profileImageUrl: string;
  contents: string;
}>;

const Edit = () => {
  const { phase } = useParams<{ phase: string }>();
  const { goBack } = useHistory();
  const [newCard, _setNewCard] = useState<Card>({
    concepts: '',
  });

  const setNewCard = useCallback(
    (card: Card) => {
      _setNewCard(card);
    },
    [_setNewCard],
  );

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
        {getPhaseContents(phase, newCard, setNewCard)}
      </EditContentsWrapper>
    </MainWrapper>
  );
};

export default Edit;
