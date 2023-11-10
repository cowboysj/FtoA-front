import React, { useState } from "react";
import Workbook from "../Components/Workbook";
import styled from "styled-components";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import QuizCard from "../Components/QuizCard";
import axios from "axios";
import { useEffect } from "react";

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
const BookWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 180px;
  height: 170px;
  margin: 30px;
  border-radius: 10px;
  background: #eee;
  box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  color: #000;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const WrapWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default function NewBook() {
  const { bookId } = useParams();
  const id = bookId;
  /*  const { state } = useLocation();
  console.log("특정 문제집", state); */
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();
  const currentPath = window.location.pathname;

  // 경로에서 맨 뒤의 숫자를 추출
  const extractedNumber = parseInt(currentPath.match(/\d+$/), 10);
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

  const handleClick = () => {
    navigate("/question");
  };

  //GET
  const sendGetRequest = async () => {
    try {
      console.log(id);
      const apiUrl = `http://localhost:8080/workbook/get/${extractedNumber}`;

      // 헤더 설정
      const headers = {
        "Content-Type": "application/json",
        "member-id": 2,
      };

      //GET 요청 보내기
      const response = await axios.get(apiUrl, { headers });

      console.log("문제집 GET 응답 데이터:", response.data);
      console.log("문제집 GET 응답 데이터:", response.data.result.getResults);
    } catch (error) {
      console.error("오류 발생:", error.message);
    }
  };
  useEffect(() => {
    sendGetRequest();
  }, []);
  return (
    <Wrap>
      <Header>
        <Text>운영체제</Text>
        <Share copied={copied} onClick={handleCopyClick}>
          문제집 공유
        </Share>
        {copied && <Complete>주소가 복사되었습니다!</Complete>}
      </Header>
      <WrapWrap>
        <BookWrap onClick={handleClick}>Chapter1</BookWrap>
        <BookWrap onClick={handleClick}>Chapter2</BookWrap>
        <BookWrap onClick={handleClick}>Chapter3</BookWrap>

        <BookWrap onClick={handleClick}>Chapter4</BookWrap>
        <BookWrap onClick={handleClick}>Chapter5</BookWrap>
      </WrapWrap>

      {/*  <WorkbookWrap>
        <QuizCard />
        <QuizCard />
        <QuizCard />
        <QuizCard />
        <QuizCard />
        <QuizCard />
      </WorkbookWrap> */}
    </Wrap>
  );
}
