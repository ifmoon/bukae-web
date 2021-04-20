import { useHistory } from 'react-router';

import { Card } from '../pages/Edit';
import { styled } from '../stitches.config';

const Name = ({
  newCard,
  setNewCard,
}: {
  newCard: Card;
  setNewCard: (card: Card) => void;
}) => {
  const history = useHistory();

  return (
    <>
      <DescriptionText>부캐의 이름은 무엇인가요?</DescriptionText>
      <NameInput
        type="text"
        placeholder="창민"
        value={newCard.name}
        onChange={e => {
          setNewCard({ ...newCard, name: e.target.value });
        }}
        style={{ marginBottom: 60 }}
      />
      <DescriptionText>부캐에게 수식어가 있나요? (선택)</DescriptionText>
      <NameInput
        type="text"
        placeholder="최강"
        value={newCard.nickname}
        onChange={e => {
          setNewCard({ ...newCard, nickname: e.target.value });
        }}
      />
      <NextStepButton
        onClick={() => {
          if (!(newCard.name?.length && newCard.name?.length > 0)) return;
          history.push('/edit/3');
        }}
        style={
          newCard.name?.length && newCard.name?.length > 0 ? 'neon' : 'gray'
        }
      >
        다음 단계로
      </NextStepButton>
    </>
  );
};

const DescriptionText = styled('p', {
  color: '#333',
  fontFamily: 'Noto Sans KR, sans-serif',
  margin: '12px 0px',
});

const NameInput = styled('input', {
  width: '100%',
  borderStyle: 'none',
  borderBottom: 'solid 1px black',
  padding: '8px 0px',
});

const NextStepButton = styled('button', {
  width: '100%',
  borderRadius: '15px',
  margin: '60px 0px',
  padding: '18px 0px',
  variants: {
    style: {
      neon: {
        backgroundColor: '$neon',
        border: 'solid 2px black',
        boxShadow: '3px 3px',
      },
      gray: {
        backgroundColor: '#f2f2f2',
        border: 'solid 2px gray',
      },
    },
  },
});

export default Name;
