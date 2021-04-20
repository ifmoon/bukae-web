import { ChangeEvent, useRef } from 'react';

import { Card } from '../pages/Edit';
import { styled } from '../stitches.config';
const Decoration = ({
  newCard,
  setNewCard,
}: {
  newCard: Card;
  setNewCard: (card: Card) => void;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
      setNewCard({
        ...newCard,
        profileImageUrl: reader.result?.toString() ?? '',
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <NavigationBar>
        <button
          onClick={() => {
            setNewCard({ ...newCard, profileImageType: 's' });
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            setNewCard({ ...newCard, profileImageType: 'm' });
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            setNewCard({ ...newCard, profileImageType: 'l' });
          }}
        >
          3
        </button>
      </NavigationBar>
      <ContentBox>
        <ProfileImageInput type="file" ref={inputRef} onChange={handleChange} />

        <ProfileImageUploadButton
          type={
            newCard.profileImageType
              ? (newCard.profileImageType as 's' | 'm' | 'l')
              : 's'
          }
          onClick={() => {
            inputRef.current?.click();
          }}
        >
          <img
            style={{ width: '100%', height: '100%' }}
            src={
              newCard.profileImageUrl?.length &&
              newCard.profileImageUrl?.length > 0
                ? newCard.profileImageUrl
                : '/Card.png'
            }
            alt="이미지 업로드"
          />
        </ProfileImageUploadButton>
      </ContentBox>
      <NextStepButton
        onClick={() => {
          console.dir(newCard);
        }}
        style={newCard.profileImageUrl && newCard.contents ? 'neon' : 'gray'}
      >
        저장하기
      </NextStepButton>
    </>
  );
};

const ProfileImageInput = styled('input', { display: 'none' });
const ProfileImageUploadButton = styled('div', {
  backgroundColor: '#f2f2f2',
  borderRadius: 20,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  variants: {
    type: {
      s: {
        width: 150,
        height: 150,
      },
      m: {
        width: 323,
        height: 150,
      },
      l: {
        width: 323,
        height: 240,
      },
    },
  },
});
const ContentBox = styled('div', {
  width: '100%',
  height: '518px',
  border: 'dashed 2px #BDBDBD',
  borderRadius: '20px',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 12,
});
const NavigationBar = styled('div', {
  width: '100%',
  display: 'flex',
  borderRadius: '15px',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '18px 2px',
  boxShadow: '3px 3px',
  margin: '24px 0px',
  border: 'solid 1px black',
});

const NextStepButton = styled('button', {
  width: '100%',
  borderRadius: '15px',
  margin: '24px 0px',
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

export default Decoration;
