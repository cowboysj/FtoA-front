import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  height: 70vh;
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
  flex-direction: column;
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
  height: 30%;
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

//
const Wrap1 = styled.div`
  margin: 16px;
  font-family: Pretendard;
  padding-top: 10px;
  display: flex;
  width: 200px;
  height: 250px;
  flex-direction: column;
  border-radius: 30px;
  background: #ff4040;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.25);
  position: relative;
  transition: transform 0.5s;

  &.flipped {
    transform: rotateY(180deg);
  }

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: transparent;
  }
`;
const Wrap2 = styled.div`
  margin: 16px;
  font-family: Pretendard;
  padding-top: 10px;
  display: flex;
  width: 200px;
  height: 250px;
  flex-direction: column;
  border-radius: 30px;
  background: #ff8a00;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.25);
  position: relative;
  transition: transform 0.5s;

  &.flipped {
    transform: rotateY(180deg);
  }

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: transparent;
  }
`;
const Wrap3 = styled.div`
  margin: 16px;
  font-family: Pretendard;
  padding-top: 10px;
  display: flex;
  width: 200px;
  height: 250px;
  flex-direction: column;
  border-radius: 30px;
  background: rgba(255, 247, 64, 0.64);
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.25);
  position: relative;
  transition: transform 0.5s;

  &.flipped {
    transform: rotateY(180deg);
  }

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: transparent;
  }
`;
const Wrap4 = styled.div`
  margin: 16px;
  font-family: Pretendard;
  padding-top: 10px;
  display: flex;
  width: 200px;
  height: 250px;
  flex-direction: column;
  border-radius: 30px;
  background: #16875f;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.25);
  position: relative;
  transition: transform 0.5s;

  &.flipped {
    transform: rotateY(180deg);
  }

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: transparent;
  }
`;

const Problem = styled.div`
  display: flex;
  display: ${(props) => (props.visible ? "flex" : "none")};
  width: 86%;
  height: 60%;
  margin: 0 auto;

  border-radius: 20px;

  overflow: scroll;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;
const ProblemContent = styled.div`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  color: #000;
`;

const FlippedContent = styled.div`
  display: ${(props) => (props.visible ? "flex" : "none")};
  width: 86%;
  height: 100%;
  margin: 0 auto;
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  overflow: scroll;
  align-items: center;
  transition: transform 0.5s;
  transform: rotateY(180deg);
`;

const HintWrap = styled.div`
  display: ${(props) => (props.visible ? "flex" : "none")};
  cursor: pointer;
  position: absolute;
  bottom: 10%;
  right: 10%;
`;

const Hint = styled.div`
  display: flex;
  cursor: pointer;
  font-family: "Pretendard";
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  width: 70px;
  border-radius: 30px;
  background: #000;
  color: white;
`;

export default function Step4() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const navigate = useNavigate();

  const handleHintClick = () => {
    setIsFlipped(!isFlipped);
  };
  const handleHintClick2 = () => {
    setIsFlipped2(!isFlipped2);
  };
  const handleHintClick3 = () => {
    setIsFlipped3(!isFlipped3);
  };
  return (
    <Wrap>
      <Des>취약 유형을 분석해드릴게요!</Des>
      <Subject>
        <Title>🚨DBMS 기능 및 목적🚨 </Title>

        <ContentWrap>
          <Plus href="https://aws.amazon.com/ko/what-is/database/">
            데이터베이스
          </Plus>
          <Plus href="df">DBMS</Plus>
          <Plus href="df">SQL</Plus>

          <ContentWrap2>
            <Wrap1 className={isFlipped2 ? "flipped" : ""}>
              <FlippedContent onClick={handleHintClick2} visible={isFlipped2}>
                데이터
              </FlippedContent>
              <Problem visible={!isFlipped2}>
                <ProblemContent>
                  데이터베이스는 무엇을 저장하나요?
                </ProblemContent>
              </Problem>
              <HintWrap visible={!isFlipped2} onClick={handleHintClick2}>
                <Hint>정답 보기</Hint>
              </HintWrap>
            </Wrap1>
            <Wrap2 className={isFlipped ? "flipped" : ""}>
              <FlippedContent onClick={handleHintClick} visible={isFlipped}>
                데이터
              </FlippedContent>

              <Problem visible={!isFlipped}>
                <ProblemContent>
                  분산 데이터베이스를 다루는 데 유용한 유형의 데이터베이스는
                  무엇인가요?
                </ProblemContent>
              </Problem>
              <HintWrap visible={!isFlipped} onClick={handleHintClick}>
                <Hint>정답 보기</Hint>
              </HintWrap>
            </Wrap2>
            <Wrap3 className={isFlipped ? "flipped" : ""}>
              <FlippedContent onClick={handleHintClick} visible={isFlipped}>
                데이터
              </FlippedContent>
              <Problem visible={!isFlipped}>
                <ProblemContent>
                  데이터베이스를 관리하기 위해 사용되는 소프트웨어는 무엇인가요?
                </ProblemContent>
              </Problem>
              <HintWrap visible={!isFlipped} onClick={handleHintClick}>
                <Hint>정답 보기</Hint>
              </HintWrap>
            </Wrap3>
            <Wrap4 className={isFlipped ? "flipped" : ""}>
              <FlippedContent onClick={handleHintClick} visible={isFlipped}>
                데이터
              </FlippedContent>
              <Problem visible={!isFlipped}>
                <ProblemContent>
                  비정형 데이터나 대량의 분산 데이터를 다루는 데 유용한
                  데이터베이스 유형은 무엇인가요?
                </ProblemContent>
              </Problem>
              <HintWrap visible={!isFlipped} onClick={handleHintClick}>
                <Hint>정답 보기</Hint>
              </HintWrap>
            </Wrap4>
          </ContentWrap2>
        </ContentWrap>
      </Subject>
      <Subject>
        <Title>🚨멀티 쓰레딩🚨 </Title>

        <ContentWrap>
          <Plus href="https://aws.amazon.com/ko/what-is/database/">
            멀티 프로세스
          </Plus>
          <Plus href="df">멀티 쓰레딩</Plus>
          <Plus href="df">운영체제</Plus>

          <ContentWrap2>
            <Wrap1 className={isFlipped2 ? "flipped" : ""}>
              <FlippedContent onClick={handleHintClick2} visible={isFlipped2}>
                데이터
              </FlippedContent>
              <Problem visible={!isFlipped2}>
                <ProblemContent>
                  동일한 자원을 공유하면서 여러 쓰레드가 동시에 접근할 때 발생할
                  수 있는 문제는?
                </ProblemContent>
              </Problem>
              <HintWrap visible={!isFlipped2} onClick={handleHintClick2}>
                <Hint>정답 보기</Hint>
              </HintWrap>
            </Wrap1>
            <Wrap2 className={isFlipped ? "flipped" : ""}>
              <FlippedContent onClick={handleHintClick} visible={isFlipped}>
                데이터
              </FlippedContent>

              <Problem visible={!isFlipped}>
                <ProblemContent>
                  한 번에 여러 작업을 처리할 수 있는 기능을 갖춘 프로그래밍
                  개념은 무엇인가요?
                </ProblemContent>
              </Problem>
              <HintWrap visible={!isFlipped} onClick={handleHintClick}>
                <Hint>정답 보기</Hint>
              </HintWrap>
            </Wrap2>
            <Wrap3 className={isFlipped ? "flipped" : ""}>
              <FlippedContent onClick={handleHintClick} visible={isFlipped}>
                데이터
              </FlippedContent>
              <Problem visible={!isFlipped}>
                <ProblemContent>
                  동일한 프로세스 내에서 여러 개의 쓰레드를 실행하는 개념은
                  무엇인가요?
                </ProblemContent>
              </Problem>
              <HintWrap visible={!isFlipped} onClick={handleHintClick}>
                <Hint>정답 보기</Hint>
              </HintWrap>
            </Wrap3>
            <Wrap4 className={isFlipped ? "flipped" : ""}>
              <FlippedContent onClick={handleHintClick} visible={isFlipped}>
                데이터
              </FlippedContent>
              <Problem visible={!isFlipped}>
                <ProblemContent>
                  쓰레드 간의 실행 순서를 결정하는 것을 조정하는 개념은
                  무엇입니까?
                </ProblemContent>
              </Problem>
              <HintWrap visible={!isFlipped} onClick={handleHintClick}>
                <Hint>정답 보기</Hint>
              </HintWrap>
            </Wrap4>
          </ContentWrap2>
        </ContentWrap>
      </Subject>
    </Wrap>
  );
}
