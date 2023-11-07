import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import login from "../img/kakao.png";
const flyInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
const Text = styled.div`
  display: flex;
  font-size: 40px;
  margin: 30px;
  font-family: "Pretendard";
  color: #000;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const FlyingTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  opacity: ${(props) => (props.showText ? "1" : "0")};
  animation: ${(props) => (props.showText ? flyInFromLeft : "none")} 1s ease;
`;
const Kakao = styled.img`
  display: flex;
  width: 30%;
  padding: 1%;
`;

const FlyingText = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // 컴포넌트가 마운트된 후에 1초 후에 글자가 나타나도록 상태를 변경합니다.
    setTimeout(() => {
      setShowText(true);
    }, 10);
  }, []);

  return (
    <FlyingTextContainer showText={showText}>
      <Text>서비스를 이용하시려면 로그인해주세요.</Text>
      <Kakao src={login} />
    </FlyingTextContainer>
  );
};

export default FlyingText;
