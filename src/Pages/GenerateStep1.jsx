import React, { useState } from "react";
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
  font-size: 30px;
  font-weight: 600;
`;
const Content = styled.textarea`
  display: flex;
  height: 70%;
  border: none;
  outline: none;
  background: #fafafa;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.25);
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  padding: 16px;
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

export default function GenerateStep1() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleStep2 = () => {
    navigate("/generate/step2");
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    dispatch(setContentValue(value));
  };

  return (
    <Wrap>
      <Text>문제를 생성할 내용을 입력해주세요.</Text>
      <Content
        onChange={handleInputChange}
        placeholder="내용을 입력해주세요."
      />

      <ButtonWrap>
        <NextButton onClick={handleStep2}>다음</NextButton>
      </ButtonWrap>
    </Wrap>
  );
}
