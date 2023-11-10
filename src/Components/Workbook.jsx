import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Token from "./Token";
import axios from "axios";

//문제집 컴포넌트
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 180px;
  height: 220px;
  margin: 15px;
  border-radius: 10px;
  background: white;
  box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
const Title = styled.div`
  display: flex;
  width: 80%;
  height: 30%;
  margin: 0 auto;
  color: #000;
  font-family: Pretendard;
  font-size: 27px;
  font-weight: 700;
`;
const Description = styled.div`
  display: flex;
  width: 80%;
  height: 50%;
  margin: 0 auto;
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 500;
`;

export default function Workbook({ newTitle, newExplanation }) {
  /*   const workbookId = "1";
  const Name = "데이터베이스";
  const Des = "이영구 교수님 데이터베이스"; */
  const jwt = Token()[1];
  const [workbook10, setWorkbook] = useState([]);

  const navigate = useNavigate();
  /*   const handleClick = () => {
    navigate(`/myworkbook/${workbookId}`, { state: { workbookId, Name, Des } });
  }; */

  //GET
  const sendGetRequest = async () => {
    try {
      const apiUrl = "http://localhost:8080/workbook/get";

      // 헤더 설정
      const headers = {
        "Content-Type": "application/json",
        "x-access-token": jwt,
      };

      //GET 요청 보내기
      const response = await axios.get(apiUrl, { headers });

      console.log("문제집 GET 응답 데이터:", response.data);
      console.log("문제집 GET 응답 데이터:", response.data.result.getResults);
      setWorkbook(response.data.result.getResults);
    } catch (error) {
      console.error("오류 발생:", error.message);
    }
  };
  useEffect(() => {
    sendGetRequest();
  }, []);

  useEffect(() => {
    if (newTitle && newExplanation) {
      setWorkbook([
        { workbook_id: 1, name: newTitle, explanation: newExplanation },
      ]);
    }
  }, [newTitle, newExplanation]);

  const handleClick = (workbook_id, name) => {
    navigate(`/myworkbook/${workbook_id}/${name}`, {
      state: { workbook_id, name },
    });
  };

  return (
    <>
      {workbook10.map(({ workbook_id, name, explanation }) => (
        <Wrap key={workbook_id} onClick={() => handleClick(workbook_id, name)}>
          <Title>{name}</Title>
          <Description>{explanation}</Description>
        </Wrap>
      ))}
    </>
  );
}
