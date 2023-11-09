import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

export default function Workbook() {
  const workbookId = "1";
  const Name = "데이터베이스";
  const Des = "이영구 교수님 데이터베이스";

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/myworkbook/${workbookId}`, { state: { workbookId, Name, Des } });
  };
  return (
    <Wrap onClick={handleClick}>
      <Title>{Name}</Title>
      <Description>{Des}</Description>
    </Wrap>
  );
}
