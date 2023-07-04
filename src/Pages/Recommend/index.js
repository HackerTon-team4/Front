import { styled } from "styled-components";

import { useRecoilValue } from "recoil";
import { stock } from "../Atom/stockAtom";

const RecommendPage = () => {
  const stockArray = useRecoilValue(stock);
  console.log(stockArray);
  return (
    <WholeWrapper>
      <S.Wrapper>
        <S.PhotoWrapper>
          <S.Photo src="/Assets/recommend.png" />
        </S.PhotoWrapper>
        <S.ButtonWrapper>
          <S.Title>주식 추천</S.Title>
          <S.Description>
            관심사 카고리별 <br></br>주식 기업 추천
          </S.Description>
        </S.ButtonWrapper>
      </S.Wrapper>

      <BackGround>
        <S.Right>
          <S.SubTitle>테스트를 통한 주식 추천 종목</S.SubTitle>
          {stockArray &&
            stockArray.map((stock) => <S.KeyWord>{stock.name}</S.KeyWord>)}
        </S.Right>
      </BackGround>
    </WholeWrapper>
  );
};

export default RecommendPage;
const WholeWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
`;
const BackGround = styled.div`
  width: 40%;
  margin-right: 100px;
  background-image: url("Assets/backGround.png");
  background-size: cover;
  background-position: center;
  z-index: 10;
  border-radius: 60px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  padding: auto 0;
`;
const Wrapper = styled.div`
  width: 30%;
  z-index: 1;
  height: 450px;
  margin: 0 auto;
  padding-top: 50px;
  border: 1px solid #407bf0;
  border-radius: 60px;
  background-color: transparent;
`;
const PhotoWrapper = styled.div`
  width: 200px;
  height: 200px;
  outline: 1px solid #5a70e0;
  border-radius: 250px;
  margin: 0 auto;
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
  font-size: 48px;
  font-weight: 800;
`;
const Description = styled.div``;

const Right = styled.div`
  width: 100%;
`;
const SubTitle = styled.div`
  width: 100%;
  margin-top: 40px;
  color: #407bf0;
  text-align: center;
  margin: 40px auto;
  font-size: 25px;
`;
const KeyWord = styled.div`
  font-size: 25px;
  border: 1px solid #407bf0;
  background-color: #407bf0;
  color: white;
  margin-top: 10px;
  border-radius: 10px;
  margin: 10px auto;
  text-align: center;
  width: 30%;
`;
const S = {
  Wrapper,
  PhotoWrapper,
  Photo,
  ButtonWrapper,
  Title,
  Description,
  Right,
  SubTitle,
  KeyWord,
};
