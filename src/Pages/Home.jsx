import React from "react";
import FlyingText from "../Components/FlyingText";
import styled from "styled-components";
import login from "../img/kakao.png";

const Wrap = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const Kakao = styled.img`
  display: flex;
  width: 30%;
  padding: 1%;
  cursor: pointer;
`;
export default function Home() {
  const K_REST_API_KEY = process.env.REACT_APP_K_REST_API_KEY;

  const K_REDIRECT_URI = `http://localhost:3000/oauth`;

  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;

  const handleKakaoLogin = () => {
    console.log(K_REST_API_KEY);
    window.location.href = kakaoURL;
  };
  return (
    <Wrap>
      <FlyingText />
      <Kakao onClick={handleKakaoLogin} src={login} />
    </Wrap>
  );
}
