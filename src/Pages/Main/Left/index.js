import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Left = () => {
  const navigate = useNavigate();

  const goTest = () => {
    navigate("/test/0");
  };
  return (
    <BackGround>
      <S.Wrapper>
        <S.PhotoWrapper>
          <S.Photo src="/Assets/mainWarren.png" />
        </S.PhotoWrapper>
        <S.ButtonWrapper>
          <S.Title>ZBTI</S.Title>
          <S.Description>나의 투자 성향 테스트</S.Description>
          <S.TestBtn onClick={goTest}>테스트 하러 가기!</S.TestBtn>
        </S.ButtonWrapper>
      </S.Wrapper>
    </BackGround>
  );
};

export default Left;
const BackGround = styled.div`
  width: 700px;
  background-image: url("Assets/backGround.png");
  background-size: cover;
  background-position: center;
  z-index: 10;
  border-radius: 60px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;
const Wrapper = styled.div`
  z-index: 1;
  height: 450px;
  margin: 0 auto;
  padding-top: 50px;
  border: 1px solid #407bf0;
  border-radius: 60px;
  display: flex;
  background-color: transparent;
`;
const PhotoWrapper = styled.div`
  width: 250px;
  height: 250px;
  outline: 1px solid #5a70e0;
  border-radius: 250px;
  margin: 80px 60px;
  background-color: white;
  overflow: hidden;
`;
const Photo = styled.img`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  border-radius: 50px;
`;
const ButtonWrapper = styled.div`
  margin: 100px 0;
  color: #3a76ef;
  text-align: center;
`;
const Title = styled.div`
  font-size: 72px;
  font-weight: 800;
`;

const Description = styled.div``;

const TestBtn = styled.div`
  width: 140px;
  border-radius: 30px;
  padding: 15px;
  outline: 1px solid #5a70e0;
  margin-top: 10px;
  background-color: white;
  cursor: pointer;
`;

const S = {
  Wrapper,
  PhotoWrapper,
  Photo,
  ButtonWrapper,
  Title,
  Description,
  TestBtn,
};
