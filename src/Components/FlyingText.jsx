import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

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
  font-size: 30px;
  font-weight: 600;
  margin: 30px;
`;

const FlyingTextContainer = styled.div`
  opacity: ${(props) => (props.showText ? "1" : "0")};
  animation: ${(props) => (props.showText ? flyInFromLeft : "none")} 1s ease;
`;

const FlyingText = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // 컴포넌트가 마운트된 후에 1초 후에 글자가 나타나도록 상태를 변경합니다.
    setTimeout(() => {
      setShowText(true);
    }, 200);
  }, []);

  return (
    <FlyingTextContainer showText={showText}>
      <Text>🌟🌟🌟</Text>
    </FlyingTextContainer>
  );
};

export default FlyingText;
