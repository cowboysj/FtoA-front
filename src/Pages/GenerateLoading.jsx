import React, { useEffect } from "react";
import Spinner from "../Components/Spinner";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrap = styled.div`
  display: flex;
  width: 90%;
  height: 80vh;
  margin: 0 auto;
  padding-top: 2%;
  flex-direction: column;
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
  color: #000;
  font-family: Pretendard;
  font-size: 36px;
  font-weight: 700;
  margin: 8%;
`;
export default function GenerateLoading() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      try {
        navigate("/question2");
      } catch (error) {
        console.error("오류 발생:", error.message);
      }
    }, 5000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);
  /* response 받으면 navigate */

  return (
    <Wrap>
      <Text>AI가 문제를 열심히 만들고 있어요!</Text>
      <Spinner />
    </Wrap>
  );
}
