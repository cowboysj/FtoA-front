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
const WorkbookWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 50px;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
`;
const Share = styled.div`
  display: flex;
  height: 18px;
  padding: 7px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: ${(props) => (props.copied ? "white" : "black")};
  color: ${(props) => (props.copied ? "black" : "white")};

  font-family: Pretendard;
  font-size: 15px;
  border: 1px solid black;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
const Complete = styled.div`
  display: flex;
  color: #000;
  font-family: Pretendard;
  font-size: 15px;

  font-weight: 500;
  margin-left: 15px;
`;

export default function Book() {
  const { state } = useLocation();
  console.log(state);
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    // 현재 주소 가져오기
    const currentURL = window.location.href;

    // 가상의 textarea 엘리먼트를 생성하고 값을 설정
    const textarea = document.createElement("textarea");
    textarea.value = currentURL;

    // textarea를 DOM에 추가
    document.body.appendChild(textarea);

    // textarea를 선택하고 복사
    textarea.select();
    document.execCommand("copy");

    // textarea 제거
    document.body.removeChild(textarea);

    // 복사 성공 메시지 표시
    setCopied(true);

    // 몇 초 후에 메시지 숨기기
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  return (
    <Wrap>
      <Header>
        <Text>{state.Name}</Text>
        <Share copied={copied} onClick={handleCopyClick}>
          문제집 공유
        </Share>
        {copied && <Complete>주소가 복사되었습니다!</Complete>}
      </Header>
      <WorkbookWrap>
        <QuizCard />
        <QuizCard />
        <QuizCard />
        <QuizCard />
        <QuizCard />
        <QuizCard />
      </WorkbookWrap>
    </Wrap>
  );
}
