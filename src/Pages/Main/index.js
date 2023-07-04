import { styled } from "styled-components";
import Left from "./Left";
import Right from "./Right";

const MainPage = () => {
  return (
    <S.Wrapper>
      <Left></Left>
      <Right></Right>
    </S.Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
`;

const S = {
  Wrapper,
};
