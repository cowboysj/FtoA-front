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

export default function NewMain() {
  const [book, setBook] = useState(null);
  const [book2, setBook2] = useState(null);
  const [book3, setBook3] = useState(null);
  const [book4, setBook4] = useState(null);
  const [book5, setBook5] = useState(null);
  const [book6, setBook6] = useState(null);
  const [book7, setBook7] = useState(null);
  const [book8, setBook8] = useState(null);
  const [book9, setBook9] = useState(null);
  const [book10, setBook10] = useState(null);
  const [book11, setBook11] = useState(null);
  const [book12, setBook12] = useState(null);

  const [book13, setBook13] = useState(null);
  const [book14, setBook14] = useState(null);
  const [book15, setBook15] = useState(null);
  const [book16, setBook16] = useState(null);
  const [book17, setBook17] = useState(null);
  const [book18, setBook18] = useState(null);
  const [book19, setBook19] = useState(null);
  const [book20, setBook20] = useState(null);
  const [book21, setBook21] = useState(null);
  const [book22, setBook22] = useState(null);

  //GET
  const sendGetRequest = async () => {
    try {
      const apiUrl = "http://localhost:8080/subject/main";

      // 헤더 설정
      const headers = {
        "Content-Type": "application/json",
        "member-id": 2,
      };

      //GET 요청 보내기
      const response = await axios.get(apiUrl, { headers });

      console.log("문제집 GET 응답 데이터:", response.data);
      console.log(
        "문제집 GET 응답 데이터:",
        response.data.result[0].workBooks[0]
      );
      setBook(response.data.result[0].subjectName);
      setBook2(response.data.result[0].workBooks[0].name);
      setBook3(response.data.result[0].workBooks[0].percent);
      setBook4(response.data.result[0].workBooks[1].name);
      setBook5(response.data.result[0].workBooks[1].percent);
      setBook6(response.data.result[0].workBooks[2].name);
      setBook7(response.data.result[0].workBooks[2].percent);
      setBook8(response.data.result[0].workBooks[3].name);
      setBook9(response.data.result[0].workBooks[3].percent);
      setBook10(response.data.result[0].workBooks[4].name);
      setBook11(response.data.result[0].workBooks[4].percent);

      setBook12(response.data.result[1].subjectName);
      setBook13(response.data.result[1].workBooks[0].name);
      setBook14(response.data.result[1].workBooks[0].percent);
      setBook15(response.data.result[1].workBooks[1].name);
      setBook16(response.data.result[1].workBooks[1].percent);
      setBook17(response.data.result[1].workBooks[2].name);
      setBook18(response.data.result[1].workBooks[2].percent);
      setBook19(response.data.result[1].workBooks[3].name);
      setBook20(response.data.result[1].workBooks[3].percent);
      setBook21(response.data.result[1].workBooks[4].name);
      setBook22(response.data.result[1].workBooks[4].percent);

      /*    setBook12(response.data.result[0].workBooks[5].name);
      setBook13(response.data.result[0].workBooks[5].percent);
      setBook14(response.data.result[0].workBooks[6].name);
      setBook15(response.data.result[0].workBooks[6].percent);
      setBook16(response.data.result[0].workBooks[7].name);
      setBook17(response.data.result[0].workBooks[7].percent); */
    } catch (error) {
      console.error("오류 발생:", error.message);
    }
  };
  useEffect(() => {
    sendGetRequest();
  }, []);
  return (
    <Wrap>
      <Subject>
        <Title>{book}</Title>
        <ContentWrap>
          <ContentWrap2>
            <Content>
              <ContentTitle>{book2}</ContentTitle>
              {/* <ContentSum>
                운영체제은 사용자의 하드웨어, 시스템 리소스를 제어하고
                프로그램에 대한 일반적
              </ContentSum> */}
              <Warning>{book3}% 망각했어요 빨리 복습하세요!!🚨</Warning>
            </Content>
            <Content2>
              <ContentTitle>{book4}</ContentTitle>
              {/* <ContentSum>
                운영체제은 사용자의 하드웨어, 시스템 리소스를 제어하고
                프로그램에 대한 일반적
              </ContentSum> */}
              <Warning>{book5}% 망각했어요 빨리 복습하세요!!🚨</Warning>
            </Content2>
            <Content3>
              <ContentTitle>{book6}</ContentTitle>
              {/*   <ContentSum>
                운영체제은 사용자의 하드웨어, 시스템 리소스를 제어하고
                프로그램에 대한 일반적
              </ContentSum> */}
              <Warning>{book7}% 망각했어요 빨리 복습하세요!!🚨</Warning>
            </Content3>
            <Content4>
              <ContentTitle>{book8}</ContentTitle>
              {/* <ContentSum>
                운영체제은 사용자의 하드웨어, 시스템 리소스를 제어하고
                프로그램에 대한 일반적
              </ContentSum> */}
              <Warning>{book9}% 망각했어요 빨리 복습하세요!!🚨</Warning>
            </Content4>
            <Content5>
              <ContentTitle>{book10}</ContentTitle>
              {/*    <ContentSum>
                운영체제은 사용자의 하드웨어, 시스템 리소스를 제어하고
                프로그램에 대한 일반적
              </ContentSum> */}
              <Warning>{book11}% 망각했어요 빨리 복습하세요!!🚨</Warning>
            </Content5>
          </ContentWrap2>
        </ContentWrap>
      </Subject>
      <Subject>
        <Title>{book12} </Title>

        <ContentWrap>
          <ContentWrap2>
            <Content>
              <ContentTitle>{book13}</ContentTitle>
              {/* <ContentSum>
                운영체제은 사용자의 하드웨어, 시스템 리소스를 제어하고
                프로그램에 대한 일반적
              </ContentSum> */}
              <Warning>{book14}% 망각했어요 빨리 복습하세요!!🚨</Warning>
            </Content>
            <Content2>
              <ContentTitle>{book15}</ContentTitle>
              {/* <ContentSum>
                운영체제은 사용자의 하드웨어, 시스템 리소스를 제어하고
                프로그램에 대한 일반적
              </ContentSum> */}
              <Warning>{book16}% 망각했어요 빨리 복습하세요!!🚨</Warning>
            </Content2>
            <Content3>
              <ContentTitle>{book17}</ContentTitle>
              {/* <ContentSum>
                운영체제은 사용자의 하드웨어, 시스템 리소스를 제어하고
                프로그램에 대한 일반적
              </ContentSum> */}
              <Warning>{book18}% 망각했어요 빨리 복습하세요!!🚨</Warning>
            </Content3>
            <Content4>
              <ContentTitle>{book19}</ContentTitle>
              {/* <ContentSum>
                운영체제은 사용자의 하드웨어, 시스템 리소스를 제어하고
                프로그램에 대한 일반적
              </ContentSum> */}
              <Warning>{book20}% 망각했어요 빨리 복습하세요!!🚨</Warning>
            </Content4>
            <Content5>
              <ContentTitle>{book21}</ContentTitle>
              {/* <ContentSum>
                운영체제은 사용자의 하드웨어, 시스템 리소스를 제어하고
                프로그램에 대한 일반적
              </ContentSum> */}
              <Warning>{book22}% 망각했어요 빨리 복습하세요!!🚨</Warning>
            </Content5>
          </ContentWrap2>
        </ContentWrap>
      </Subject>
    </Wrap>
  );
}
