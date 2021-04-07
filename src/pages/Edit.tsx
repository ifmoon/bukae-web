import { styled } from '../stitches.config';

const MainWrapper = styled('div', {
  width: '100%',
  height: '100%',
  backgroundColor: 'white',
  display: 'flex',
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

const Edit = () => {
  return (
    <MainWrapper>
      <EditHeaderWrapper>
        <HeaderButton>
          <img src="/Left.svg" alt="뒤로가기" />
        </HeaderButton>
        step1.컨셉 선택
        <HeaderButton>
          <img src="/Cancel.svg" alt="취소" />
        </HeaderButton>
      </EditHeaderWrapper>
    </MainWrapper>
  );
};

export default Edit;
