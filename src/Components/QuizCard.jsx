import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
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

  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  const handleHintClick = () => {
    setIsFlipped(!isFlipped);
  };

  const [quiz, setQuiz1] = useState(null);
  const [quiz2, setQuiz2] = useState(null);
  const [quiz3, setQuiz3] = useState(null);
  //GET
  const sendGetRequest = async () => {
    try {
      const apiUrl = "http://localhost:8080/workbook/get/9";

      // 헤더 설정
      const headers = {
        "Content-Type": "application/json",
        "member-id": 2,
      };

      //GET 요청 보내기
      const response = await axios.get(apiUrl, { headers });

      console.log("문제집 GET 응답 데이터:", response);
      /*       setQuiz1(response.data.result.quiz[0]);
      setQuiz2(response.data.result.quiz[1]);
      setQuiz3(response.data.result.quiz[2]); */
      /*  console.log("문제집 GET 응답 데이터2:", response.data.result); */
      /*  setOriginalText(response.data.result.text.content); */
      /*  setWorkbook(response.data.result.getResults); */
    } catch (error) {
      console.error("오류 발생:", error.message);
    }
  };
  useEffect(() => {
    sendGetRequest();
  }, []);
  /*   const FlippedContentText1 = quiz.answer; */
  /*   const FlippedContentText1 = "운ㅇ";

  const FlippedContentText2 = quiz2.answer;

  const FlippedContentText3 = quiz3.answer; */

  return (
    <Div>
      <Wrap className={isFlipped ? "flipped" : ""}>
        <FlippedContent onClick={handleHintClick} visible={isFlipped}>
          운영체제
        </FlippedContent>
        <Problem visible={!isFlipped}>
          컴퓨터의 핵심 소프트웨어는 무엇인가요?
        </Problem>
        <HintWrap visible={!isFlipped} onClick={handleHintClick}>
          <Hint>정답 보기</Hint>
        </HintWrap>
      </Wrap>
      <Wrap className={isFlipped ? "flipped" : ""}>
        <FlippedContent onClick={handleHintClick} visible={isFlipped}>
          소프트웨어
        </FlippedContent>
        <Problem visible={!isFlipped}>운영체제란 무엇인가?</Problem>
        <HintWrap visible={!isFlipped} onClick={handleHintClick}>
          <Hint>정답 보기</Hint>
        </HintWrap>
      </Wrap>
      <Wrap className={isFlipped ? "flipped" : ""}>
        <FlippedContent onClick={handleHintClick} visible={isFlipped}>
          운영체제
        </FlippedContent>
        <Problem visible={!isFlipped}>
          운영체제에서 사용자의 데이터를 저장하는 기능은 무엇인가?
        </Problem>
        <HintWrap visible={!isFlipped} onClick={handleHintClick}>
          <Hint>정답 보기</Hint>
        </HintWrap>
      </Wrap>
    </Div>
  );
}
