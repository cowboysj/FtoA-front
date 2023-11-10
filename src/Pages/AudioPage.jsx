import React, { useState } from "react";
import Workbook from "../Components/Workbook";
import styled from "styled-components";
import { useLocation, useParams } from "react-router-dom";
import QuizCard from "../Components/QuizCard";

//특정 워크북 페이지

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

const Header = styled.div`
  display: flex;
  align-items: center;
`;

export default function AudioPage() {
  return (
    <Wrap>
      <Header>
        <Text>음성 요약</Text>
      </Header>
    </Wrap>
  );
}
