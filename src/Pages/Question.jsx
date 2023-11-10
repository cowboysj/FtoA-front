//문제 만들어서 보여주는 페이지

import React from "react";
import styled from "styled-components";
import Keyword from "../Components/Keyword";
import NewQuiz from "../Components/NewQuiz";
import KeyTest from "../Components/KeyTest";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  padding-top: 15px;
  margin: 0 auto;
`;
const Text = styled.div`
  display: flex;
  height: 10%;
  color: #000;
  font-family: Pretendard;
  font-size: 30px;
  font-weight: 600;
  margin: 15px;
`;

const Text1 = styled.div`
  display: flex;
  height: 7%;
  color: #000;
  font-family: Pretendard;
  font-size: 25px;
  font-weight: 600;
  margin: 15px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

export default function Question() {
  return (
    <Wrap>
      <Header>
        <Text>요청한 문제를 만들었어요! </Text>
      </Header>
      <KeyTest />
      <NewQuiz />
    </Wrap>
  );
}
