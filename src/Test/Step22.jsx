import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCreateNum, setKeywordNum } from "../Redux/ContentSlice";
import Token from "../Components/Token";

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
  margin-top: 20px;
`;

const ButtonWrap = styled.div`
  display: flex;
  height: 20%;
  width: 80%;
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
const BoxWrap = styled.div`
  display: flex;
  height: 50%;
  width: 80%;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
`;
const KeyWord = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: ${(props) => (props.active1 ? "lightgray" : "white")};
  height: 70%;
  width: 30%;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.25);
  /* &:hover {
    background-color: lightgray;
  } */
`;
const InputWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Label = styled.div`
  display: flex;
  color: #000;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const KeywordInput = styled.input`
  display: flex;
  width: 32px;
  margin-left: 10px;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
`;
const NewInput = styled.input`
  display: flex;
  width: 32px;
  margin-left: 10px;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
`;

const NewQuestion = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: ${(props) => (props.active2 ? "lightgray" : "white")};
  height: 70%;
  width: 30%;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.25);
  /* &:hover {
  background-color: lightgray;
} */
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  color: #000;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const Content = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  width: 80%;
`;
export default function Step22() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const jwt = Token()[1];

  const [keyword, setKeyword] = useState(false);
  const [NewCard, setNewCard] = useState(false);

  const handleKeywordClick = () => {
    setKeyword(!keyword);
  };

  const handleNewClick = () => {
    setNewCard(!NewCard);
  };

  const handleKeyNum = (e) => {
    const value = e.target.value;
    dispatch(setKeywordNum(value));
  };

  const handleCreate = (e) => {
    const value = e.target.value;
    dispatch(setCreateNum(value));
  };

  const Content22 = useSelector((state) => state.content.contentValue);
  const Num1 = useSelector((state) => state.content.keywordNum);
  const Num2 = useSelector((state) => state.content.createNum);

  const handleStep2 = () => {
    setPostData({
      text: Content22,
      BlankNo: Num1,
      SubNo: Num2,
    });

    navigate("/step2loading");
    console.log(Content22);
    console.log(Num1);
    console.log(Num2);
  };

  // POST 요청
  const [postData, setPostData] = useState({
    text: null,
    BlankNo: 0,
    SubNo: 0,
  });

  const sendPostRequest = async () => {
    console.log(jwt);

    console.log("11", Content22, Num1, Num2);
    try {
      const apiUrl = "http://localhost:8080/question/create";

      const headers = {
        "Content-Type": "application/json",
        "member-id": 2,
      };
      const Text = JSON.stringify(Content22);

      const response = await axios.post(
        apiUrl,
        {
          workbookId: 19,
          text: Text,
          blankNo: 3,
          subNo: 2,
        },
        { headers }
      );
      console.log("POST 응답 데이터:", response.data);
      navigate("/question");
    } catch (error) {
      console.error("오류 발생:", error.message);
    }
    console.log(Content22, Num1, Num2);
  };

  // POST 이벤트 핸들러
  const handleButtonClick = () => {
    handleStep2();
    sendPostRequest();
  };

  return (
    <Wrap>
      <Text>생성할 문제 유형을 선택해주세요.</Text>
      <BoxWrap>
        <KeyWord active1={keyword} onClick={handleKeywordClick}>
          <Title>키워드 가리기 </Title>
          <Content>AI가 제출한 글에서 중요한 키워드를 가려 제공합니다.</Content>
          <InputWrap>
            <Label>원하는 키워드 개수를 입력하세요 :</Label>
            <KeywordInput onChange={handleKeyNum} type="number" max={10} />
          </InputWrap>
        </KeyWord>
        <NewQuestion active2={NewCard} onClick={handleNewClick}>
          <Title>새로운 문제 생성 유형</Title>
          <Content>
            AI가 제출한 글에서 중요한 부분을 문제로 만들어줍니다.
          </Content>
          <InputWrap>
            <Label>원하는 문제 개수를 입력하세요 :</Label>
            <NewInput onChange={handleCreate} type="number" max={10} />
          </InputWrap>
        </NewQuestion>
      </BoxWrap>
      <ButtonWrap>
        <NextButton onClick={handleButtonClick}>다음</NextButton>
      </ButtonWrap>
    </Wrap>
  );
}
