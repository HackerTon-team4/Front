import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Right = () => {
  const navigate = useNavigate();
  const goRecommend = () => {
    navigate("/recommend");
  };
  return (
    <S.Wrapper>
      <BackGround>
        <S.Recommend onClick={goRecommend}>
          <S.PhotoWrapper>
            <S.Photo src="/Assets/recommend.png" />
          </S.PhotoWrapper>
          <S.ButtonWrapper>
            <S.Title>주식 추천</S.Title>
            <S.Description>관심 카테고리별 주식 추천</S.Description>
          </S.ButtonWrapper>
        </S.Recommend>
      </BackGround>
      {/* <BackGround>
        <S.Rising>
          <S.PhotoWrapper>
            <S.Photo src="" />
          </S.PhotoWrapper>
          <S.ButtonWrapper>
            <S.Title>주식 사전</S.Title>
            <S.Description>모르는 게 많은 주린이들을 위한</S.Description>
          </S.ButtonWrapper>
        </S.Rising>
      </BackGround> */}
    </S.Wrapper>
  );
};

export default Right;
const BackGround = styled.div`
  width: 320px;
  height: 500px;
  margin: 0 auto;
  background-image: url("Assets/backGround.png");
  background-size: cover;
  background-position: center;
  z-index: 10;
  border-radius: 60px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;
const Wrapper = styled.div`
  width: 40%;
`;
const Recommend = styled.div`
  z-index: 1;
  width: 100%;
  height: 180px;
  margin: 0 auto;
  padding-top: 150px;
  border-radius: 60px;
  display: flex;
  background-color: transparent;
`;
const PhotoWrapper = styled.div`
  width: 100px;
  height: 100px;
  outline: 1px solid #5a70e0;
  border-radius: 100px;
  margin: 20px 20px;
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
  color: #3a76ef;
  text-align: center;
  margin-top: 30px;
`;
const Title = styled.div`
  font-size: 32px;
  font-weight: 800;
`;
const Description = styled.div`
  margin-top: 5px;
  font-size: 12px;
`;
const Rising = styled.div`
  z-index: 1;
  width: 100%;
  height: 180px;
  margin: 0 auto;
  padding-top: 50px;
  margin-top: 30px;
  border: 1px solid #407bf0;
  border-radius: 60px;
  display: flex;
  background-color: transparent;
`;

const S = {
  Wrapper,
  Recommend,
  PhotoWrapper,
  Photo,
  ButtonWrapper,
  Title,
  Description,
  Rising,
};
