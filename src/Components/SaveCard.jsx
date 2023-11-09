import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Wrap = styled.div`
  margin: 16px;
  padding-top: 10px;
  display: flex;
  width: 200px;
  height: 300px;
  flex-direction: column;
  border-radius: 30px;
  background: #fff;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.25);
  position: relative;

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  /* 스크롤바 트랙(Track) 숨기기 */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* 스크롤바 쓰는 부분(Thumb) 숨기기 */
  ::-webkit-scrollbar-thumb {
    background: transparent;
  }
`;
const Problem = styled.div`
  display: flex;
  width: 86%;
  height: 230px;
  margin: 0 auto;
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  overflow: scroll;
  align-items: center;
`;
const HintWrap = styled.div`
  display: flex;
  cursor: pointer;
  position: absolute;
  bottom: 10%;
  right: 10%;
  height: 35px;
`;
const Hint = styled.div`
  display: flex;
  cursor: pointer;
  font-family: "Pretendard";
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  width: 60px;
  border-radius: 30px;
  background: #000;
  color: white;
`;
const Save = styled.div`
  display: flex;
  cursor: pointer;
  margin-left: 5px;
  font-family: "Pretendard";
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  width: 30px;
  border-radius: 30px;
  background: white;
  color: black;
  border: 1.5px solid black;
`;

const Modal = styled.div`
  width: 300px;
  height: 150px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: #fff;
  z-index: 1000;
  border-radius: 30px;
  background: #fff;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.25);
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 999; /* 모달보다 낮은 z-index */
`;
const ModalTitle = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const BookWrap = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  width: 95%;
  margin: 0 auto;
  margin-top: 20px;
`;
const Book = styled.div`
  display: flex;
  margin: 3px;
  height: 18px;
  max-width: 150px;
  padding: 5px 13px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: ${(props) => (props.copied ? "black" : "white")};
  color: ${(props) => (props.copied ? "white" : "black")};

  font-family: Pretendard;
  font-size: 15px;
  border: 1px solid black;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
    border: 1px solid black;
  }
`;
const Close = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  border: 1px solid black;
  width: 40px;
  padding: 5px 5px;
  border-radius: 30px;
  background: #fff;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.25);
  position: absolute;
  bottom: 20px;
  right: 30px;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
    border: 1px solid black;
  }
`;
export default function SaveCard() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSaveClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOverlayClick = () => {
    setModalOpen(false);
  };
  const Problem2 =
    "임진왜란은 어떤 기간 동안 발생했으며, 어떤 국가와의 전쟁이었나요?";

  const navigate = useNavigate();

  return (
    <Wrap>
      <Problem>{Problem2}</Problem>
      <HintWrap>
        <Hint>힌트 보기</Hint>
        <Save onClick={handleSaveClick}>저장</Save>
        {isModalOpen && (
          <>
            <ModalOverlay onClick={handleOverlayClick} />
            <Modal>
              {/* 모달 내용 */}
              <ModalTitle>문제를 저장할 문제집을 선택해주세요.</ModalTitle>
              <BookWrap>
                <Book>데이터베이스</Book>
                <Book>운영체제</Book>
                <Book>자료구조</Book>
                <Book>교양</Book>
                <Book>경제학적 사유의 원리 </Book>
              </BookWrap>

              <Close onClick={handleCloseModal}>닫기</Close>
            </Modal>
          </>
        )}
      </HintWrap>
    </Wrap>
  );
}
