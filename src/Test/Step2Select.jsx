import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setContentValue } from "../Redux/ContentSlice";
const Wrap = styled.div`
  display: flex;
  width: 90%;
  height: 80vh;
  margin: 0 auto;
  padding-top: 2%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

const Text = styled.div`
  display: flex;
  height: 10%;
  color: #000;
  font-family: Pretendard;
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const Content = styled.div`
  display: flex;
  width: 80%;

  justify-content: center;

  height: 70%;
`;
const Click = styled.div`
  display: flex;
  background: #fff;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.25);
  width: 30%;
  height: 40%;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard";
  font-size: 40px;
  font-weight: 600;
  border-radius: 20px;
  cursor: pointer;
  margin: 30px;
  &:hover {
    background-color: black;
    color: white;
  }
`;
const ButtonWrap = styled.div`
  display: flex;
  height: 10%;
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
`;

export default function Step2Select() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleStep1 = () => {
    navigate("/step2pdf");
  };

  const handleStep12 = () => {
    navigate("/step21");
  };

  return (
    <Wrap>
      <Text>퀴즈 생성</Text>
      <Content>
        <Click onClick={handleStep1}>파일 업로드</Click>
        <Click onClick={handleStep12}>직접 입력하기</Click>
      </Content>
    </Wrap>
  );
}
