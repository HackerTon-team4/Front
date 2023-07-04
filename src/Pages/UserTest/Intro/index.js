import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Intro = () => {
  const navigate = useNavigate();

  const startTest = () => {
    navigate("/test/1");
  };
  return (
    <S.Wrapper>
      <S.Title>ZBTI 테스트</S.Title>
      <S.Description>
        <S.BoldSentence>
          나의 주식 투자 성향을 파악하고, 투자 상품을 추천하여 안내해주기 위한
          도구로
        </S.BoldSentence>
        나의 주식 투자 성향을 판단하는데 참고하는 자료입니다.<br></br>
        극심하게 맹신하거나 과몰입하지 않길 바랍니다.
      </S.Description>
      <S.AgreeBtn onClick={startTest}>네, 알겠습니다.</S.AgreeBtn>
    </S.Wrapper>
  );
};

export default Intro;

const Wrapper = styled.div`
  color: #407bf0;
  text-align: center;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 800;
  margin-top: 60px;
`;

const Description = styled.div`
  margin-top: 30px;
`;

const BoldSentence = styled.div`
  font-weight: 800;
`;

const AgreeBtn = styled.div`
  width: 300px;
  margin: 60px auto;
  outline: 1px solid #799edc;
  border-radius: 30px;
  padding: 15px;
  color: #407bf0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const S = {
  Wrapper,
  Title,
  Description,
  BoldSentence,
  AgreeBtn,
};
