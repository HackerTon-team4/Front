import { styled } from "styled-components";
import MemberApi from "../../../Apis/memberApi";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const onClickLogin = async (e) => {
    e.preventDefault();
    const email = e.target.elements.id.value;
    const password = e.target.elements.pw.value;
    try {
      const response = await MemberApi.logIn({ email, password });
      localStorage.setItem("token", response.data.token);
      navigate("/main");
    } catch (err) {
      alert(`${err.response.data.message}`);
      e.target.elements.id.value = "";
      e.target.elements.pw.value = "";
    }
  };

  const goSignUp = () => {
    navigate("/form/signup");
  };

  return (
    <>
      <S.Wrapper onSubmit={onClickLogin}>
        <S.Form>
          <S.Title>로그인</S.Title>
          <S.ID type="text" placeholder="이메일" name="id"></S.ID>
          <S.PW type="password" placeholder="비밀번호" name="pw"></S.PW>
          <S.LogIn>완료</S.LogIn>
        </S.Form>
        <S.SignUp onClick={goSignUp}>
          계정이 아직 없으시다면 ?<S.BoldWord>회원가입</S.BoldWord>
        </S.SignUp>
      </S.Wrapper>
    </>
  );
};

export default LoginPage;

const Wrapper = styled.form`
  width: 70%;
  height: 450px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #407bf0;
  border-radius: 60px;
  background-color: #fafaff;
`;

const Title = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: 800;
  color: #407bf0;
  margin-top: 100px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ID = styled.input`
  width: 300px;
  height: 25px;
  border-radius: 30px;
  padding: 5px;
  border: 1px solid #799edc;
  margin-top: 10px;
`;

const PW = styled.input`
  width: 300px;
  height: 25px;
  border-radius: 30px;
  padding: 5px;
  border: 1px solid #799edc;
  margin-top: 10px;
`;

const LogIn = styled.button`
  cursor: pointer;
  border: none;
  width: 100px;
  height: 35px;
  background-color: #799edc;
  border-radius: 15px;
  margin-top: 20px;
`;
const SignUp = styled.div`
  display: flex;
  color: #3a76ef;
  margin-top: 20px;
  cursor: pointer;
`;
const BoldWord = styled.div`
  font-weight: 800;
`;
const S = {
  Wrapper,
  Title,
  Form,
  ID,
  PW,
  LogIn,
  SignUp,
  BoldWord,
};
