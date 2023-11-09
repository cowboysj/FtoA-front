import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
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

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  /* 스크롤바 트랙(Track) 숨기기 */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* 스크롤바 쓰는 부분(Thumb) 숨기기 */
  ::-webkit-scrollbar-thumb {
    background: transparent;
  }
`;
const Problem = styled.div`
  display: flex;
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
const HintWrap = styled.div`
  display: flex;
  cursor: pointer;
  position: absolute;
  bottom: 10%;
  right: 10%;
  height: 35px;
`;
const Hint = styled.div`
  display: flex;
  cursor: pointer;
  font-family: "Pretendard";
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  width: 60px;
  border-radius: 30px;
  background: #000;
  color: white;
`;
const Save = styled.div`
  display: flex;
  cursor: pointer;
  margin-left: 5px;
  font-family: "Pretendard";
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  width: 30px;
  border-radius: 30px;
  background: white;
  color: black;
  border: 1.5px solid black;
`;
export default function SaveCard() {
  const Problem2 =
    "임진왜란은 어떤 기간 동안 발생했으며, 어떤 국가와의 전쟁이었나요?";

  const navigate = useNavigate();

  return (
    <Wrap>
      <Problem>{Problem2}</Problem>
      <HintWrap>
        <Hint>힌트 보기</Hint>
        <Save>저장</Save>
      </HintWrap>
    </Wrap>
  );
}
