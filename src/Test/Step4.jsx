import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Des = styled.div`
  display: flex;
  font-size: 36px;
  height: 50px;
  color: black;
  font-family: Pretendard;
  font-size: 30px;
  font-weight: 600;
  margin-top: 20px;
`;
const Subject = styled.div`
  display: flex;
  border-radius: 30px;
  border: 1px solid #000;
  background: #fafafa;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.25);
  height: 50vh;
  margin: 10px;
  width: 900px;
  overflow: scroll;
  justify-content: center;
  flex-direction: column;
  /* x축 방향으로 스크롤이 가능한 경우에만 스크롤바를 보여줌 */
  overflow-x: auto;
  overflow-y: hidden;

  /* Webkit 브라우저에 대한 스타일 */
  &::-webkit-scrollbar {
    height: 0.5em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
  }
`;
const Title = styled.div`
  color: black;
  font-family: Pretendard;
  font-size: 30px;
  font-weight: 600;
  height: 10%;
  width: 90%;
  margin: 0 auto;
`;
const ContentWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;

  margin: 0 auto;
`;
const ContentWrap2 = styled.div`
  display: flex;
  width: 95%;

  margin: 0 auto;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 250px;

  align-items: center;
  border-radius: 30px;
  background: #ff4040;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.25);
  overflow: scroll;
  margin: 10px;
  /* x축과 y축 양쪽으로 스크롤이 가능한 경우에만 스크롤바를 보여줌 */
  overflow: auto;

  /* Webkit 브라우저에 대한 스타일 */
  &::-webkit-scrollbar {
    width: 0.5em;
    height: 0.5em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
  }
`;
const Content2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 250px;

  align-items: center;
  border-radius: 30px;
  background: #ff8a00;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.25);
  overflow: scroll;
  margin: 10px;
  /* x축과 y축 양쪽으로 스크롤이 가능한 경우에만 스크롤바를 보여줌 */
  overflow: auto;

  /* Webkit 브라우저에 대한 스타일 */
  &::-webkit-scrollbar {
    width: 0.5em;
    height: 0.5em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
  }
`;
const Content3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 250px;

  align-items: center;
  border-radius: 30px;
  background: rgba(255, 247, 64, 0.64);

  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.25);
  overflow: scroll;
  margin: 10px;
  /* x축과 y축 양쪽으로 스크롤이 가능한 경우에만 스크롤바를 보여줌 */
  overflow: auto;

  /* Webkit 브라우저에 대한 스타일 */
  &::-webkit-scrollbar {
    width: 0.5em;
    height: 0.5em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
  }
`;
const Content4 = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 250px;

  align-items: center;
  border-radius: 30px;
  background: #3adba1;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.25);
  overflow: scroll;
  margin: 10px;
  /* x축과 y축 양쪽으로 스크롤이 가능한 경우에만 스크롤바를 보여줌 */
  overflow: auto;

  /* Webkit 브라우저에 대한 스타일 */
  &::-webkit-scrollbar {
    width: 0.5em;
    height: 0.5em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
  }
`;
const Content5 = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 250px;

  align-items: center;
  border-radius: 30px;
  background: #16875f;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.25);
  overflow: scroll;
  margin: 10px;
  /* x축과 y축 양쪽으로 스크롤이 가능한 경우에만 스크롤바를 보여줌 */
  overflow: auto;

  /* Webkit 브라우저에 대한 스타일 */
  &::-webkit-scrollbar {
    width: 0.5em;
    height: 0.5em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
  }
`;
const ContentTitle = styled.div`
  color: black;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  height: 10%;
  padding: 4px 20px;
  margin: 0 auto;
  margin: 20px;
  background-color: black;
  color: white;
  border-radius: 30px;
  max-width: 90px;
`;
const ContentSum = styled.div`
  display: flex;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;

  height: 50%;
  width: 70%;
  overflow: auto;

  /* Webkit 브라우저에 대한 스타일 */
  &::-webkit-scrollbar {
    width: 0.5em;
    height: 0.5em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
  }
`;
const Warning = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 40%;
  border-radius: 30px;
  border: 1px solid #000;
  background: #fff;
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  padding: 0px 10px;
  text-align: center;
  margin-top: 7px;
`;

export default function Step4() {
  return (
    <Wrap>
      <Des>취약 유형을 분석해드릴게요!</Des>
      <Subject>
        <Title>데이터베이스</Title>
        <ContentWrap>
          <ContentWrap2>
            <Content>
              <ContentTitle>취약 유형1</ContentTitle>
              {/* <ContentSum>
                운영체제은 사용자의 하드웨어, 시스템 리소스를 제어하고
                프로그램에 대한 일반적
              </ContentSum> */}
              <Warning>% 망각했어요 빨리 복습하세요!!🚨</Warning>
            </Content>
            <Content2>
              <ContentTitle>123</ContentTitle>
              {/* <ContentSum>
                운영체제은 사용자의 하드웨어, 시스템 리소스를 제어하고
                프로그램에 대한 일반적
              </ContentSum> */}
              <Warning>% 망각했어요 빨리 복습하세요!!🚨</Warning>
            </Content2>
            <Content3>
              <ContentTitle>123</ContentTitle>
              {/*   <ContentSum>
                운영체제은 사용자의 하드웨어, 시스템 리소스를 제어하고
                프로그램에 대한 일반적
              </ContentSum> */}
              <Warning>% 망각했어요 빨리 복습하세요!!🚨</Warning>
            </Content3>
            <Content4>
              <ContentTitle>123</ContentTitle>
              {/* <ContentSum>
                운영체제은 사용자의 하드웨어, 시스템 리소스를 제어하고
                프로그램에 대한 일반적
              </ContentSum> */}
              <Warning>% 망각했어요 빨리 복습하세요!!🚨</Warning>
            </Content4>
            <Content5>
              <ContentTitle>123</ContentTitle>
              {/*    <ContentSum>
                운영체제은 사용자의 하드웨어, 시스템 리소스를 제어하고
                프로그램에 대한 일반적
              </ContentSum> */}
              <Warning>% 망각했어요 빨리 복습하세요!!🚨</Warning>
            </Content5>
          </ContentWrap2>
        </ContentWrap>
      </Subject>
      <Subject>
        <Title>운영체제</Title>
        <ContentWrap>
          <ContentWrap2>
            <Content>
              <ContentTitle>123</ContentTitle>
              {/* <ContentSum>
                운영체제은 사용자의 하드웨어, 시스템 리소스를 제어하고
                프로그램에 대한 일반적
              </ContentSum> */}
              <Warning>% 망각했어요 빨리 복습하세요!!🚨</Warning>
            </Content>
            <Content2>
              <ContentTitle>123</ContentTitle>
              {/* <ContentSum>
                운영체제은 사용자의 하드웨어, 시스템 리소스를 제어하고
                프로그램에 대한 일반적
              </ContentSum> */}
              <Warning>% 망각했어요 빨리 복습하세요!!🚨</Warning>
            </Content2>
            <Content3>
              <ContentTitle>123</ContentTitle>
              {/*   <ContentSum>
                운영체제은 사용자의 하드웨어, 시스템 리소스를 제어하고
                프로그램에 대한 일반적
              </ContentSum> */}
              <Warning>% 망각했어요 빨리 복습하세요!!🚨</Warning>
            </Content3>
            <Content4>
              <ContentTitle>123</ContentTitle>
              {/* <ContentSum>
                운영체제은 사용자의 하드웨어, 시스템 리소스를 제어하고
                프로그램에 대한 일반적
              </ContentSum> */}
              <Warning>% 망각했어요 빨리 복습하세요!!🚨</Warning>
            </Content4>
            <Content5>
              <ContentTitle>123</ContentTitle>
              {/*    <ContentSum>
                운영체제은 사용자의 하드웨어, 시스템 리소스를 제어하고
                프로그램에 대한 일반적
              </ContentSum> */}
              <Warning>% 망각했어요 빨리 복습하세요!!🚨</Warning>
            </Content5>
          </ContentWrap2>
        </ContentWrap>
      </Subject>
      <Subject>
        <Title>인간의 가치 탐색</Title>
        <ContentWrap>
          <ContentWrap2>
            <Content>
              <ContentTitle>123</ContentTitle>
              {/* <ContentSum>
                운영체제은 사용자의 하드웨어, 시스템 리소스를 제어하고
                프로그램에 대한 일반적
              </ContentSum> */}
              <Warning>% 망각했어요 빨리 복습하세요!!🚨</Warning>
            </Content>
            <Content2>
              <ContentTitle>123</ContentTitle>
              {/* <ContentSum>
                운영체제은 사용자의 하드웨어, 시스템 리소스를 제어하고
                프로그램에 대한 일반적
              </ContentSum> */}
              <Warning>% 망각했어요 빨리 복습하세요!!🚨</Warning>
            </Content2>
            <Content3>
              <ContentTitle>123</ContentTitle>
              {/*   <ContentSum>
                운영체제은 사용자의 하드웨어, 시스템 리소스를 제어하고
                프로그램에 대한 일반적
              </ContentSum> */}
              <Warning>% 망각했어요 빨리 복습하세요!!🚨</Warning>
            </Content3>
            <Content4>
              <ContentTitle>123</ContentTitle>
              {/* <ContentSum>
                운영체제은 사용자의 하드웨어, 시스템 리소스를 제어하고
                프로그램에 대한 일반적
              </ContentSum> */}
              <Warning>% 망각했어요 빨리 복습하세요!!🚨</Warning>
            </Content4>
            <Content5>
              <ContentTitle>123</ContentTitle>
              {/*    <ContentSum>
                운영체제은 사용자의 하드웨어, 시스템 리소스를 제어하고
                프로그램에 대한 일반적
              </ContentSum> */}
              <Warning>% 망각했어요 빨리 복습하세요!!🚨</Warning>
            </Content5>
          </ContentWrap2>
        </ContentWrap>
      </Subject>
    </Wrap>
  );
}
