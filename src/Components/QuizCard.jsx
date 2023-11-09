import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrap = styled.div`
  margin: 16px;
  padding-top: 10px;
  display: flex;
  width: 200px;
  height: 300px;
  flex-direction: column;
  border-radius: 30px;
  background: #fff;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.25);
  position: relative;
  transition: transform 0.5s;

  &.flipped {
    transform: rotateY(180deg);
  }

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: transparent;
  }
`;

const Problem = styled.div`
  display: ${(props) => (props.visible ? "flex" : "none")};
  width: 86%;
  height: 230px;
  margin: 0 auto;
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  overflow: scroll;
  align-items: center;
`;

const FlippedContent = styled.div`
  display: ${(props) => (props.visible ? "flex" : "none")};
  width: 86%;
  height: 100%;
  margin: 0 auto;
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  overflow: scroll;
  align-items: center;
  transition: transform 0.5s;
  transform: rotateY(180deg);
`;

const HintWrap = styled.div`
  display: ${(props) => (props.visible ? "flex" : "none")};
  cursor: pointer;
  position: absolute;
  bottom: 10%;
  right: 10%;
`;

const Hint = styled.div`
  display: flex;
  cursor: pointer;
  font-family: "Pretendard";
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  width: 70px;
  border-radius: 30px;
  background: #000;
  color: white;
`;

export default function QuizCard() {
  const Problem2 =
    "임진왜란은 어떤 기간 동안 발생했으며, 어떤 국가와의 전쟁이었나요?";
  const FlippedContentText = "힌트";

  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  const handleHintClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Wrap className={isFlipped ? "flipped" : ""}>
      <FlippedContent onClick={handleHintClick} visible={isFlipped}>
        {FlippedContentText}
      </FlippedContent>
      <Problem visible={!isFlipped}>{Problem2}</Problem>
      <HintWrap visible={!isFlipped} onClick={handleHintClick}>
        <Hint>힌트 보기</Hint>
      </HintWrap>
    </Wrap>
  );
}