import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
  font-size: 13px;
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
const FileInput = styled.input`
  width: 200px;
  margin-top: 20px;
  height: 30px;
  background: #fff;
  border: none;

  &::file-selector-button {
    &:hover {
      background: rgb(77, 77, 77);
      color: #fff;
    }
  }
`;

export default function GenerateStep1() {
  const navigate = useNavigate();
  const handleStep2 = () => {
    navigate("/generate/step2");
  };
  return (
    <Wrap>
      <Text>문제를 생성할 내용을 입력해주세요.</Text>
      <Content placeholder="내용을 입력해주세요." />
      <FileInput type="file" accept=".mp3" />

      <ButtonWrap>
        <NextButton onClick={handleStep2}>다음</NextButton>
      </ButtonWrap>
    </Wrap>
  );
}
