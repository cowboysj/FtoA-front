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
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export default function Step13() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Wrap>
      <Text>요약본</Text>
      <Content>
        <Heading>데이터베이스란?</Heading>
        <Body>
          데이터베이스는 전자적으로 저장되고 체계적인 데이터 모음입니다.
          여기에는 단어, 숫자, 이미지, 비디오 및 파일을 포함한 모든 유형의
          데이터가 포함될 수 있습니다. DBMS (데이터베이스 관리 시스템) 라는
          소프트웨어를 사용하여 데이터를 저장, 검색 및 편집할 수 있습니다.
          컴퓨터 시스템에서 데이터베이스라는 단어는 모든 DBMS, 데이터베이스
          시스템 또는 데이터베이스와 관련된 응용 프로그램을 나타낼 수도
          있습니다.
        </Body>
        <Heading>데이터베이스가 중요한 이유?</Heading>
        <Heading2>효율적인 확장</Heading2>
        <Body>
          데이터베이스 애플리케이션은 수백만, 수십억 개 등으로 확장하여 대량의
          데이터를 관리할 수 있습니다. 데이터베이스 없이는 이렇게 많은 양의
          디지털 데이터를 저장할 수 없습니다.
        </Body>
        <Heading2>데이터 무결성</Heading2>
        <Body>
          데이터베이스에는 데이터 일관성을 유지하기 위한 기본 제공 규칙 및
          조건이 있는 경우가 많습니다.
        </Body>
        <Heading2>데이터 보안</Heading2>
        <Body>
          데이터베이스는 모든 데이터와 관련된 개인정보 보호 및 규정 준수 요구
          사항을 지원합니다. 예를 들어 데이터베이스에 액세스하려면 사용자가
          로그인해야 합니다. 사용자마다 액세스 수준이 다를 수 있습니다(예: 읽기
          전용).
        </Body>
        <Heading>데이터베이스의 유형에는 어떤 것들이 있나요?</Heading>
        <Body>
          데이터베이스를 사용 사례, 데이터 유형 및 데이터 저장 방법에 따라
          분류할 수 있습니다. 다음은 데이터베이스를 분류하는 세 가지 방법입니다.
          문서 텍스트, 통계 또는 멀티미디어 객체와 같은 콘텐츠 기준 회계, 영화
          또는 제조와 같은 적용 분야 기준 데이터베이스 구조 또는 인터페이스
          유형과 같은 기술적 측면 기준
        </Body>
        <Heading>데이터베이스 모델이란?</Heading>
        <Body>
          데이터베이스 모델은 데이터베이스의 논리적 구조를 보여줍니다. 데이터를
          저장, 구성 및 조작할 수 있는 방법을 결정하는 관계와 규칙을 정의합니다.
          각 데이터베이스 애플리케이션은 특정 데이터 모델을 기반으로 구축됩니다.
          개별 데이터베이스 모델은 기본 애플리케이션이 채택하는 광범위한 데이터
          모델의 규칙과 개념을 기반으로 설계되었습니다.
        </Body>
        <img src="https://i.ibb.co/GVj3g6t/database-seo-1-270cb06b819915c5f763a0b9f88255e044c4dac5-249328f222f09586e55df76cb2fc99cd28d45a09.png" />
      </Content>
    </Wrap>
  );
}

const Content = styled.div`
  display: flex;
  border: 1px solid black;
  font-family: "Pretendard";
  width: 80%;
  border-radius: 10px;
  flex-direction: column;
  padding: 10px;
`;
const Heading = styled.div`
  display: flex;
  font-size: 30px;
  font-weight: 600;
  line-height: 2;
`;
const Heading2 = styled.div`
  display: flex;
  font-size: 25px;
  font-weight: 500;
  line-height: 1.3;
`;

const Body = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 20px;
`;
