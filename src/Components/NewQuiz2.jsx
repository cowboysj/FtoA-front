import React from "react";
import styled from "styled-components";

import SaveCard from "./SaveCard";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import QuizCard from "./QuizCard";
import QuizCard2 from "./QuizCard2";

const Text1 = styled.div`
  display: flex;
  height: 7%;
  color: #000;
  font-family: Pretendard;
  font-size: 25px;
  font-weight: 600;
  margin: 20px;
  margin-left: 30px;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  /* 수직 스크롤바 스타일링 */
  ::-webkit-scrollbar {
    width: 10px; /* 스크롤바 너비 */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888; /* 스크롤바 색상 */
    border-radius: 5px; /* 스크롤바 모서리 둥글게 */
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* 스크롤바 호버 시 색상 변경 */
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;
const NextButton = styled.div`
  display: flex;
  cursor: pointer;
  font-family: "Pretendard";
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  width: 36px;
  height: 20px;
  border-radius: 30px;
  background: #000;
  color: white;
  margin-top: 10px;
`;

const QuizWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
`;

export default function NewQuiz2() {
  return (
    <Wrap>
      <Text1>문제 생성 유형 </Text1>
      <QuizWrap>
        {/*  <SaveCard />
        <SaveCard />
        <SaveCard />
        <SaveCard />
        <SaveCard /> */}
        <QuizCard2 />
      </QuizWrap>
    </Wrap>
  );
}
