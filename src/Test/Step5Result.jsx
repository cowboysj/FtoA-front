import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setContentValue } from "../Redux/ContentSlice";

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

export default function Step5Result() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Wrap>
      <Text>제출한 29개의 과목 수강생들은 다음 과목들도 수강했어요!</Text>
      <Content>
        <Subject>
          <Title>컴퓨터구조</Title>
          <Des>
            컴퓨터 구조 설계의 기초 이론으로써 기본적인 컴퓨터 시스템의 구성과
            설계에 대한 개념과 기법을 소개한다. 데이터의 표시방법, 레지스터의
            전송과 마이크로 동작, 컴퓨터 소프트웨어를 포함하여 연산장치,
            제어장치, 입출력장치의 구조와 설계기법을 학습함으 로써 컴퓨터를
            설계할 수 있는 지식을 습득하고 명령포맷, CPU 내부구조, 하드 와이어드
            제어에 의한 제어 유닛 설계, 마이크로프 로그램 제어에 의한 제어 유닛
            설계, 인터럽트, DMA 등에 의한 I/O 처리 기술을 배운다. 이 과목을
            수강하기 전에 논리회로를 수강 할 것을 권고한다.
          </Des>
        </Subject>
        <Subject>
          <Title>컴퓨터네트워크</Title>
          <Des>
            컴퓨터 네트워크를 구성하는 각종 네트워킹 장치들의 계층 모델, 특성,
            동작 방법, 그리고 운용 기술에 대하여 학습한다. 또한 이들 장치를 상호
            연결한 인터네트워크의 구성과 동작 방법에 대하여 소개한다. 본 과목의
            수강을 통하여 컴퓨터 네트워크의 구성과 동작 방법에 대하여 소개한다.
            본 과목의 수강을 통하여 컴퓨터 네트워크의 7계층 구조와 인터넷 4계층
            구조를 이해할 수 있고, 간단한 LAN(Local Area Network)을 설계할 수
            있으며, 계층 모델을 기반으로 한 컴퓨터 네트워크의 이론적 이해 및
            분석력을 함양함으로 써 컴퓨터 네트워킹 개념에 대한 이론과 실용
            기술을 체득할 수 있다
          </Des>
        </Subject>
        <Subject>
          <Title>알고리즘</Title>
          <Des>
            알고리즘의 기본적인 이해를 하고 대표적인 알고리즘의 형태를 배운다.
            알고리즘 유형을 divide-and-conquer, dynamic programming, greedy
            algorithms, branch-and-bound 등으로 분류하고, 각각의 특성을
            이해하도록 한다. 아울러 기본적인 복잡 도 문제를 살펴본다. 본 과목을
            이수 후 새로운 문제에 대한 해결 알고리즘을 설계할 수 있는 능력을
            키운다.
          </Des>
        </Subject>
      </Content>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  width: 90%;
  height: 110vh;
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
`;
const Content = styled.div`
  display: flex;
  height: 80%;
  flex-direction: column;
`;
const Subject = styled.div`
  display: flex;
  border-radius: 30px;
  background: #fff;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.25);
  width: 60vw;
  height: 40%;
  padding: 15px;
  flex-direction: column;
  justify-content: center;
  margin: 16px;
`;

const Title = styled.div`
  display: flex;
  color: #000;
  font-family: Pretendard;
  font-size: 30px;
  font-weight: 600;
  height: 26%;
`;
const Des = styled.div`
  font-family: Pretendard;
  line-height: 1.4;
`;
