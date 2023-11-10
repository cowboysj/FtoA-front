import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../img//logo.png";
import { useDispatch } from "react-redux";

const Div = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  border-bottom: 0.7px solid black;
`;
const Wrap = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  align-items: center;
  margin: 0 auto;
`;
const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8%;
  height: 55%;
`;
const Logo = styled.img`
  display: flex;
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

const MenuWrap = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
`;

const Menu = styled.div`
  display: flex;
  padding-left: 10%;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  font-family: "Pretendard";
`;

const LoginButton = styled.div`
  display: flex;
  background-color: pink;
  cursor: pointer;
  font-family: "Pretendard";
  justify-content: center;
  align-items: center;
  padding: 10px 16px;

  border-radius: 30px;
  background: #000;
  color: white;
`;

export default function Nav() {
  /*  const alreadyUser = useSelector((state) => state.login.alreadyuser);  */
  const navigate = useNavigate();

  const handleMainClick = () => {
    navigate("/");
  };
  const handleCommunityClick = () => {
    navigate("/generate/step1");
  };
  const handleMyClick = () => {
    navigate("/myworkbook");
  };
  const handleAudioClick = () => {
    navigate("/audio");
  };
  /* dispatch(setAlreadyuser(true));
const alreadyUser = useSelector((state) => state.login.alreadyuser); */
  const K_REST_API_KEY = process.env.REACT_APP_K_REST_API_KEY;

  const K_REDIRECT_URI = `http://localhost:3000/oauth`;

  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;

  const handleKakaoLogin = () => {
    console.log(K_REST_API_KEY);
    window.location.href = kakaoURL;
  };

  return (
    <Div>
      <Wrap>
        <LogoWrap onClick={handleMainClick}>
          <Logo src={logo} alt="로고" />
        </LogoWrap>
        <MenuWrap>
          <Menu onClick={handleCommunityClick}>문제 생성</Menu>
          <Menu onClick={handleMyClick}>내 문제집</Menu>
          <Menu onClick={handleAudioClick}>음성 요약</Menu>
        </MenuWrap>
        <LoginButton onClick={handleKakaoLogin}>로그인</LoginButton>
      </Wrap>
    </Div>
  );
}
