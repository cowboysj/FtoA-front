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
  width: 340px;
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
  right: 90px;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
`;
const MakeButton = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  border: 1px solid black;
  width: 40px;
  padding: 5px 5px;
  border-radius: 30px;
  background: black;
  color: white;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.25);
  position: absolute;
  bottom: 20px;
  right: 30px;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
`;
const InputWrap = styled.div`
  display: flex;

  flex-direction: column;
  width: 95%;
  margin: 0 auto;
  margin-top: 20px;
`;
const TitleInput = styled.input`
  display: flex;
  width: 150px;
  margin: 0px 0px 10px 10px;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  color: black;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  ::placeholder {
    color: gray;
  }
`;
const DesInput = styled.input`
  display: flex;
  width: 250px;
  margin-left: 10px;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  color: black;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  ::placeholder {
    color: gray;
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
          <ModalOverlay />
          <Modal>
            {/* 모달 내용 */}
            <ModalTitle>생성할 문제집 이름, 설명을 적어주세요.</ModalTitle>
            <InputWrap>
              <TitleInput placeholder="문제집 이름" />
              <DesInput placeholder="설명" />
            </InputWrap>

            <Close onClick={handleCloseModal}>취소</Close>
            <MakeButton onClick={handleCloseModal}>생성</MakeButton>
          </Modal>
        </>
      )}
    </Wrap>
  );
}
