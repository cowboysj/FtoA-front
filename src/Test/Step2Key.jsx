import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
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
const Content = styled.div`
  display: flex;
  padding: 15px;
  width: 90%;
  margin: 0 auto;
  background: #fafafa;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.25);
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 225% */
  overflow: scroll;
`;
const Text1 = styled.div`
  display: flex;
  height: 7%;
  color: #000;
  font-family: Pretendard;
  font-size: 25px;
  font-weight: 600;
  margin: 20px;
  margin-left: 30px;
`;
const SubmitWrap = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 93%;
  margin: 0 auto;
  margin: 10px;
`;
const Submit = styled.div`
  display: flex;
  width: 30px;
  cursor: pointer;
  font-family: "Pretendard";
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  border-radius: 30px;
  background: #000;
  color: white;
`;

const BackgroundOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const ModalWrap = styled.div`
  position: absolute;
  top: 40%;
  left: 35%;
  width: 350px;
  height: 200px;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 30px;
  background: #fff;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.25);
  z-index: 100;
`;
const ModalContent = styled.div`
  position: absolute;
  width: 90%;
  height: 70%;
`;

const ModalTitle = styled.div`
  display: flex;
  font-family: Pretendard;
  font-size: 30px;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

const ModalAnswer = styled.div`
  display: flex;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  align-items: center;
  margin-left: 20px;
`;
const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
const ModalClose = styled.div`
  display: flex;
  width: 40px;
  cursor: pointer;
  font-family: "Pretendard";
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  border-radius: 30px;
  background: #000;
  color: white;
`;

const Step2Key = () => {
  const [inputFields, setInputFields] = useState([]);
  const [originalText, setOriginalText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  const openModal = () => {
    setShowModal(true);
    setShowBackground(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setShowBackground(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 서버에서 데이터를 가져오는 로직을 구현
        // 예: const response = await fetch('/api/getBlankCountAndText');
        // const data = await response.json();

        // 여기에서 서버에서 받은 데이터로 빈칸에 대한 입력 필드와 원본 텍스트를 설정
        /* const data = {
          blankCount: 3, // 임시 데이터 (실제로는 서버에서 받아야 함)
          originalText:
            "운영체제(operating system, 약칭: OS)은 사용자의 하드웨어, 시스템 리소스를 제어하고 <blank1> 대한 일반적 서비스를 지원하는 시스템 소프트웨어이다. 시스템 하드웨어를 관리할 뿐 아니라 응용 소프트웨어를 실행하기 위하여 하드웨어 추상화 플랫폼과 공통 시스템 <blank2>를 제공한다. 최근에는 가상화 기술의 발전에 힘입어 실제 하드웨어가 아닌 하이퍼바이저(가상 머신) 위에서 실<blank3> 한다.",
        };
 */
        /*  setOriginalText(data.originalText);
         */
        const newInputFields = Array.from({ length: 3 }, (_, index) => ({
          id: index + 1,
          value: "",
        }));

        setInputFields(newInputFields);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (id, value) => {
    setInputFields((prevFields) =>
      prevFields.map((field) => (field.id === id ? { ...field, value } : field))
    );
  };

  const renderTextWithInputs = () => {
    let result =
      "<blank1>는 정보를 구조화하고 저장하는 데 사용되는 체계화된 데이터의 모음입니다. 이는 일반적으로 컴퓨터 시스템에서 사용되며, 여러 사용자가 동시에 접근할 수 있도록 설계되어 있습니다. 데이터베이스는 다양한 형태의 데이터를 저장하고 관리할 수 있는데, 이 데이터는 텍스트, 숫자, 이미지, 동영상 등 다양한 형태일 수 있습니다. <blank3>는 효율적인 데이터 관리를 위해 데이터를 구조화하고 검색, 추가, 수정, 삭제할 수 있는 기능을 제공합니다. 일반적으로 데이터베이스는 <blank2>에 의해 관리되며, 관계형 데이터베이스(Relational Database)와 NoSQL 데이터베이스(Not Only SQL) 등 다양한 유형이 있습니다. 관계형 데이터베이스는 테이블 간의 관계를 중심으로 데이터를 저장하고, NoSQL 데이터베이스는 비정형 데이터나 대량의 분산 데이터를 다룰 때 유용합니다.데이터베이스는 다양한 분야에서 활용되며, 기업의 업무 처리, 인터넷 서비스, 은행 시스템, 학교 관리 시스템, 의료 기록 관리 등 다양한 분야에서 중요한 역할을 합니다.";

    inputFields.forEach((field) => {
      result = result.replace(
        `<blank${field.id}>`,
        `<input type="text" value="${field.value}" />`
      );
    });
    return <div dangerouslySetInnerHTML={{ __html: result }} />;
  };

  return (
    <Wrap>
      <Text1>키워드 가리기 유형</Text1>
      <Content>{renderTextWithInputs()}</Content>
      <SubmitWrap>
        <Submit onClick={openModal}>제출</Submit>
      </SubmitWrap>
      {showBackground && <BackgroundOverlay onClick={closeModal} />}
      {showModal ? (
        <ModalWrap>
          <ModalContent>
            <ModalTitle>다 맞았어요⭐💯</ModalTitle>
            <ModalAnswer>1번 정답 : 데이터베이스</ModalAnswer>
            <ModalAnswer>2번 정답 : 데이터베이스</ModalAnswer>
            <ModalAnswer>3번 정답 : DBMS</ModalAnswer>
            <ButtonWrap>
              <ModalClose onClick={closeModal}>닫기</ModalClose>
            </ButtonWrap>
          </ModalContent>
        </ModalWrap>
      ) : null}
    </Wrap>
  );
};

export default Step2Key;
