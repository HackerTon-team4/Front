import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import Intro from "./Intro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Test from "./Tests/test1";
import { useState } from "react";
import Test2 from "./Tests/test2";
import Test3 from "./Tests/test3";
import Test4 from "./Tests/test4";
import Test5 from "./Tests/test5";
import { arrayState } from "../Atom/atom";
import { useRecoilState } from "recoil";
import LastPage from "./Tests/lastPage";
import Test6 from "./Tests/test6";

const TestPage = () => {
  const [data, setData] = useState();
  const { page } = useParams();
  const pageNum = Number(page);
  const navigate = useNavigate();
  const onClickNext = () => {
    pageNum < 7 && navigate(`/test/${pageNum + 1}`);
  };
  const [array, setArray] = useRecoilState(arrayState);
  return (
    <S.Wrapper>
      {pageNum === 0 && <Intro />}
      {pageNum === 1 && <Test setArray={setArray} />}
      {pageNum === 2 && <Test2 setArray={setArray} />}
      {pageNum === 3 && <Test3 setArray={setArray} />}
      {pageNum === 4 && <Test4 setArray={setArray} />}
      {pageNum === 5 && <Test5 setArray={setArray} />}
      {pageNum === 6 && <Test6 setArray={setArray} />}
      {pageNum > 6 && <LastPage />}

      {data && pageNum === 8 && <Test />}
      {page != 0 && pageNum < 7 && (
        <S.NextPageBtn onClick={onClickNext}>
          <S.BtnWord>다음 단계로 이동</S.BtnWord>
          <FontAwesomeIcon icon={faArrowRight} />
        </S.NextPageBtn>
      )}
    </S.Wrapper>
  );
};

export default TestPage;

const Wrapper = styled.div`
  width: 80%;
  height: 560px;
  margin: 0 auto;
  padding-top: 30px;
  border: 1px solid #407bf0;
  border-radius: 60px;
  justify-content: center;
  background-color: #fafaff;
`;

const NextPageBtn = styled.div`
  width: 300px;
  height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  border-radius: 30px;
  padding: 15px;
  border: none;
  margin-top: 20px;
  justify-content: space-between;
  background-color: #5a70e0;
  color: white;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const BtnWord = styled.div`
  margin: 0 auto;
`;

const S = {
  Wrapper,
  NextPageBtn,
  BtnWord,
};
