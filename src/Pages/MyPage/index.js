import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
const MyPage = () => {
  const navigate = useNavigate();
  const goTest = () => {
    navigate("/test/0");
  };
  return (
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
  );
};
export default MyPage;
const Wrapper = styled.div`
  width: 30%;
  height: 450px;
  margin: 0 auto;
  padding-top: 50px;
  border: 1px solid #407bf0;
  border-radius: 60px;
  background-color: #eef3fe;
`;

const PhotoWrapper = styled.div`
  width: 200px;
  height: 200px;
  outline: 1px solid #5a70e0;
  border-radius: 200px;
  background-color: white;
  overflow: hidden;
  margin: 0 auto;
`;
const Photo = styled.img`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  border-radius: 50px;
`;
const ButtonWrapper = styled.div`
  color: #3a76ef;
  text-align: center;
`;
const Title = styled.div`
  font-size: 64px;
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
  margin: 20px auto;
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
