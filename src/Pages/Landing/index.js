import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPowerOff } from "@fortawesome/free-solid-svg-icons";
const LandingPage = () => {
  const navigate = useNavigate();
  const goTest = () => {
    navigate("test/0");
  };

  const goLogin = () => {
    navigate("form/login");
  };
  return (
    <S.Wrapper>
      <S.Left>
        <S.Title>ZBTI 테스트</S.Title>
        <S.Description1>나의 투자 성향을 파악하고 </S.Description1>
        <S.Description2> 투자 성향에 따른 주식 상품 추천</S.Description2>
        <S.Description3> 나와 같은 성향의 유명 투자자 찾기.</S.Description3>

        <S.TestBtn onClick={goTest}>
          <div>내 ZBTI 테스트 하러 가기</div>
          <FontAwesomeIcon icon={faArrowRight} />
        </S.TestBtn>
        <S.LoginBtn onClick={goLogin}>
          <div>이미 계정이 있으시다면</div>
          <FontAwesomeIcon icon={faPowerOff} />
        </S.LoginBtn>
      </S.Left>
      <S.Right>
        <S.PhotoWrapper>
          <S.Photo src="Assets/landingWarren.png" />
        </S.PhotoWrapper>

        <S.TextPart>
          <S.UpperText>
            <div>나는 어떤 주식을 사야할까? 🤔</div>
          </S.UpperText>
          <S.DownText>
            <div>내 투자 성향이 XXXX와 같다고?! 🤩</div>
          </S.DownText>
        </S.TextPart>
      </S.Right>
    </S.Wrapper>
  );
};

export default LandingPage;

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
`;

const Left = styled.div`
  width: 50%;
`;

const Title = styled.div`
  margin-top: 10px;
  font-size: 80px;
  color: #5a70e0;
  font-weight: 800;
`;

const Description1 = styled.div`
  margin-top: 10px;
  font-size: 30px;
  color: #4e61c2;
`;
const Description2 = styled.div`
  margin-top: 0.5px;
  font-size: 30px;
  color: #4e61c2;
`;
const Description3 = styled.div`
  margin-top: 0.5px;
  font-size: 30px;
  color: #407bf0;
  margin-bottom: 50px;
`;
const TestBtn = styled.div`
  width: 300px;
  display: flex;
  color: white;
  align-items: center;
  background-color: #5a70e0;
  text-decoration: none;
  border-radius: 30px;
  padding: 15px;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-left: 40px;
`;
const LoginBtn = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  border-radius: 30px;
  padding: 15px;
  outline: 1px solid #5a70e0;
  margin-top: 10px;
  justify-content: space-between;
  color: #407bf0;
  padding-left: 40px;
`;

const Right = styled.div`
  width: 50%;
`;
const PhotoWrapper = styled.div`
  width: 250px;
  height: 250px;
  outline: 1px solid #5a70e0;
  border-radius: 250px;
  margin: 0 auto;
  overflow: hidden;
`;
const Photo = styled.img`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  border-radius: 50px;
`;

const TextPart = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const UpperText = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  border-radius: 30px;
  padding: 15px;
  border: none;
  margin-bottom: 10px;
  margin-left: 160px;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  color: #407bf0;
  div {
    margin: 0 auto;
  }
`;
const DownText = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  border-radius: 30px;
  padding: 15px;
  border: none;
  margin-top: 10px;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  background-color: #c4ccf4;
  color: white;
  div {
    margin: 0 auto;
  }
`;

const S = {
  Wrapper,
  Left,
  Title,
  Description1,
  Description2,
  Description3,
  TestBtn,
  LoginBtn,
  Right,
  PhotoWrapper,
  Photo,
  TextPart,
  UpperText,
  DownText,
};
