import { useHistory } from 'react-router';

import { Card } from '../pages/Edit';
import { styled } from '../stitches.config';

const Concepts = ({
  newCard,
  setNewCard,
}: {
  newCard: Card;
  setNewCard: (card: Card) => void;
}) => {
  const history = useHistory();

  return (
    <>
      <ConceptsWrapper>
        {conceptsData.map(d => (
          <ConceptItem key={d.name}>
            <ConceptButton
              onClick={() => {
                setNewCard({ ...newCard, concepts: d.name });
              }}
              style={newCard.concepts === d.name ? 'neon' : 'gray'}
            >
              {d.emoji}
            </ConceptButton>
            {d.label}
          </ConceptItem>
        ))}
      </ConceptsWrapper>

      <NextStepButton
        style={newCard.concepts ? 'neon' : 'gray'}
        onClick={() => {
          if (!newCard.concepts) return;

          history.push('/edit/2');
        }}
      >
        다음 단계로
      </NextStepButton>
    </>
  );
};
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
  borderRadius: 20,
  margin: '4px 0px',
  variants: {
    style: {
      neon: {
        backgroundColor: '$neon',
        boxShadow: '3px 3px',
        border: 'solid 2px black',
      },
      gray: {
        border: 'solid 2px gray',
        backgroundColor: '#f2f2f2',
      },
    },
  },
});

const conceptsData = [
  {
    name: 'fashion',
    label: '패션',
    emoji: '👖',
  },
  {
    name: 'travel',
    label: '여행',
    emoji: '🗺',
  },
  {
    name: 'game',
    label: '게임',
    emoji: '🎮',
  },
  {
    name: 'media',
    label: '미디어',
    emoji: '🎥',
  },
  {
    name: 'exercise',
    label: '운동',
    emoji: '⚽️',
  },
  {
    name: 'music',
    label: '음악',
    emoji: '🎧',
  },
  {
    name: 'photo',
    label: '패션',
    emoji: '📸️',
  },
  {
    name: 'fangirling',
    label: '덕질',
    emoji: '🙊',
  },
  {
    name: 'invest',
    label: '투자',
    emoji: '💸',
  },
  {
    name: 'house',
    label: '집콕만렙',
    emoji: '🛌',
  },
  {
    name: 'carrot',
    label: '중고거래',
    emoji: '🥕',
  },
  {
    name: 'gourmet',
    label: '미식가',
    emoji: '🍱',
  },
];

export default Concepts;
