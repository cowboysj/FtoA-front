import React, { useState } from "react";
import Workbook from "../Components/Workbook";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  padding-top: 15px;
  margin: 0 auto;
`;

const Text = styled.div`
  display: flex;
  height: 10%;
  color: #000;
  font-family: Pretendard;
  font-size: 30px;
  font-weight: 600;
  margin: 15px;
`;

const WorkbookWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const Plus = styled.div`
  display: flex;
  width: 35px;
  height: 35px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 100%;
  justify-content: center;
  font-size: 30px;

  &:hover {
    background-color: black;
    color: #fff;
  }
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
  border: 1px solid #000;
  z-index: 1000;
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
const Book = styled.div`
  display: flex;
  height: 18px;
  max-width: 90px;
  padding: 7px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: ${(props) => (props.copied ? "white" : "black")};
  color: ${(props) => (props.copied ? "black" : "white")};

  font-family: Pretendard;
  font-size: 15px;
  border: 1px solid black;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export default function MyWorkbook() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handlePlusClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOverlayClick = () => {
    setModalOpen(false);
  };

  return (
    <Wrap>
      <Header>
        <Text>내 문제집</Text>
        <Plus onClick={handlePlusClick}>+</Plus>
      </Header>
      <WorkbookWrap>
        <Workbook />
        {/* 여기에 다른 Workbook 컴포넌트들 추가 */}
      </WorkbookWrap>

      {isModalOpen && (
        <>
          <ModalOverlay onClick={handleOverlayClick} />
          <Modal>
            {/* 모달 내용 */}
            <ModalTitle>문제를 저장할 문제집을 선택해주세요.</ModalTitle>
            <Book>데이터베이스</Book>
            <button onClick={handleCloseModal}>닫기</button>
          </Modal>
        </>
      )}
    </Wrap>
  );
}
