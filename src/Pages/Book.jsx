import React from "react";
import Workbook from "../Components/Workbook";
import styled from "styled-components";
import { useLocation, useParams } from "react-router-dom";
import QuizCard from "../Components/QuizCard";

//특정 워크북

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
const WorkbookWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
`;
const Plus = styled.div`
  display: flex;
  width: 35px;
  height: 35px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 100%;

  justify-content: center;
  font-size: 30px;
  &:hover {
    background-color: black;
    color: #fff;
  }
`;

export default function Book() {
  const { state } = useLocation();
  console.log(state);
  return (
    <Wrap>
      <Header>
        <Text>{state.Name}</Text>
        <Plus>+</Plus>
      </Header>
      <WorkbookWrap>
        <QuizCard />
      </WorkbookWrap>
    </Wrap>
  );
}
