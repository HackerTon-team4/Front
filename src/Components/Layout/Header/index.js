import {
  faArrowRightToBracket,
  faClipboardUser,
  faUser,
  faUserAlt,
  faUserCog,
  faUserMd,
  faUserMinus,
  faUsersLine,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Header = () => {
  const navigate = useNavigate();

  const goMain = () => {
    navigate("/main");
  };

  const goMyPage = () => {
    navigate("/my");
  };
  const goLogin = () => {
    navigate("/form/login");
  };
  return (
    <S.Wrapper>
      <S.Logos onClick={goMain}>
        <S.Logo src="/Assets/zbti.jpg" alt="로고 이미지"></S.Logo>
        <S.TextLogo src="/Assets/zbti typo.png" alt="로고 이미지"></S.TextLogo>
      </S.Logos>

      <S.MyPage>
        <S.goLogin onClick={goLogin}>
          <FontAwesomeIcon icon={faArrowRightToBracket} />
        </S.goLogin>
        <div onClick={goMyPage}>
          <FontAwesomeIcon icon={faUser} />
        </div>
      </S.MyPage>
    </S.Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Logos = styled.div`
  display: flex;
`;

const Logo = styled.img`
  width: 75px;
  margin-right: 5px;
`;

const TextLogo = styled.img`
  width: 80px;
  height: 25px;
  margin: auto 0;
`;

const MyPage = styled.div`
  width: 60px;
  display: flex;
  font-size: 20px;
  color: #3a76ef;
  text-align: center;
  padding-top: 10px;
`;

const goLogin = styled.div`
  width: 60px;
  font-size: 20px;
  color: #3a76ef;
  text-align: center;
`;

const S = {
  Wrapper,
  Logos,
  Logo,
  TextLogo,
  MyPage,
  goLogin,
};
