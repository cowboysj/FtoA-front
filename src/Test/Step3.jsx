import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setContentValue } from "../Redux/ContentSlice";
const Wrap = styled.div`
  display: flex;
  width: 80%;

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
  width: 74%;
  margin: 0 auto;
`;
const Content = styled.div`
  display: flex;
  width: 90%;
  height: 90%;
  flex-direction: column;
  margin-bottom: 50px;
`;
const Container = styled.div`
  display: flex;
  width: 80%;
  height: 300px;
  margin: 0 auto;
  margin-left: 170px;
  margin-top: 20px;
  border-radius: 30px;
  background: #fff;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.25);
  flex-direction: column;
`;
const Title = styled.div`
  display: flex;
  width: 90%;
  height: 10%;
  margin: 0 auto;
  font-family: Pretendard;
  font-size: 27px;
  font-style: normal;
  font-weight: 600;
  margin-top: 50px;
`;

const Answer = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 20px;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
`;
const Plus = styled.a`
  display: flex;
  width: 90%;
  height: 30px;
  margin: 0 auto;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: gray;
  text-decoration: underline;
  cursor: pointer;
`;
export default function Step3() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleStep2 = () => {
    navigate("/step31");
  };

  return (
    <Wrap>
      <Text>오답노트</Text>
      <Content>
        <Container>
          <Title>관계형 데이터베이스와 NoSQL 데이터베이스의 차이점은?</Title>
          <Answer>
            관계형 데이터베이스는 테이블 간의 관계를 중심으로 데이터를 저장하고,
            데이터는 정해진 구조를 가지며 SQL(Structured Query Language)을
            사용하여 관리됩니다. 반면에 NoSQL 데이터베이스는 스키마가 유연하며,
            대규모 분산 데이터나 비정형 데이터를 다루기에 적합합니다. 관계형
            데이터베이스는 ACID(원자성, 일관성, 고립성, 지속성) 트랜잭션을
            지원하는 반면, NoSQL 데이터베이스는 유연성과 확장성을 강조합니다.
          </Answer>
          <Plus href="https://www.oracle.com/kr/database/what-is-a-relational-database/">
            관계형 데이터베이스란?
          </Plus>
          <Plus href="https://www.oracle.com/kr/database/nosql/what-is-nosql/">
            NoSQL이란?
          </Plus>
        </Container>
        <Container>
          <Title>데이터베이스 관리 시스템 제공하는 기능은?</Title>
          <Answer>
            데이터베이스 관리 시스템(Database Management System, DBMS)은
            데이터를 관리하기 위한 소프트웨어로, 데이터의 구조화, 검색, 추가,
            수정, 삭제 등의 기능을 제공합니다. 또한, 데이터베이스의 보안, 무결성
            유지, 동시 접근 제어 등을 담당하여 데이터를 효율적으로 관리합니다.
          </Answer>
          <Plus href="https://www.oracle.com/kr/database/what-is-a-relational-database/">
            데이터베이스 관리 시스템
          </Plus>
        </Container>
        <Container>
          <Title>DBMS란?</Title>
          <Answer>
            DBMS는 데이터베이스 관리 시스템(Database Management System)의
            약자입니다. 데이터베이스 관리 시스템은 데이터를 구조화하고 관리하기
            위한 소프트웨어입니다. 이를 통해 데이터의 추가, 검색, 수정, 삭제와
            같은 작업을 수행하며, 데이터의 보안, 무결성 유지, 동시 접근 제어 등
            다양한 기능을 제공합니다. DBMS는 여러 사용자가 동시에 데이터에
            접근할 수 있도록 해주고, 데이터베이스를 효율적으로 관리하여 정보를
            안정적으로 저장하고 활용할 수 있도록 도와줍니다.
          </Answer>
          <Plus href="https://www.oracle.com/kr/database/what-is-a-relational-database/">
            DBMS
          </Plus>
        </Container>
      </Content>
    </Wrap>
  );
}
