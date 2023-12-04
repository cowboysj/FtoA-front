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
const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`;

const Text = styled.div`
  display: flex;
  height: 10%;
  color: #000;
  font-family: Pretendard;
  font-size: 30px;
  font-weight: 600;
`;
const Content = styled.textarea`
  display: flex;
  height: 70%;
  border: none;
  outline: none;
  background: #fafafa;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.25);
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  padding: 16px;
`;
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

export default function Step2pdf() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleStep2 = () => {
    navigate("/step12");
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    dispatch(setContentValue(value));
  };

  //pdf
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [file, setFile] = useState(null);

  const onFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
      setPageNumber(1); // Reset page number when a new file is selected
    }
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () => {
    setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prevPageNumber) => Math.min(prevPageNumber + 1, numPages));
  };
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const handleSubmit = () => {
    navigate("/step2loading");
  };
  return (
    <Wrap>
      <Text>퀴즈를 만들 자료를 업로드해주세요.</Text>
      <Div>
        <input type="file" onChange={onFileChange} />

        {file && (
          <PdfViewerContainer>
            <PdfViewerButtons>
              <PdfViewerButton
                onClick={goToPrevPage}
                disabled={pageNumber <= 1}
              >
                이전 페이지
              </PdfViewerButton>
              <Submit onClick={handleSubmit}>제출</Submit>
              <PdfViewerButton
                onClick={goToNextPage}
                disabled={pageNumber >= numPages}
              >
                다음 페이지
              </PdfViewerButton>
            </PdfViewerButtons>
            <PageNumber>
              Page {pageNumber} of {numPages}
            </PageNumber>
            <Document
              file={URL.createObjectURL(file)}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page width={500} height={720} pageNumber={pageNumber} />
            </Document>
          </PdfViewerContainer>
        )}
      </Div>
    </Wrap>
  );
}
const PdfViewerContainer = styled.div`
  margin-top: 20px;
  height: 90vh;
  width: 50vw;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PdfViewerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  width: 50%;
`;

const PdfViewerButton = styled.button`
  padding: 5px 10px;
  border: none;
  background-color: black;
  color: #fff;
  font-family: "Pretendard";
  cursor: pointer;
  border-radius: 30px;
`;
const Submit = styled.button`
  padding: 5px 10px;
  border: none;
  background-color: white;
  color: black;
  border: 1px solid black;
  font-family: "Pretendard";
  cursor: pointer;
  border-radius: 8px;
  width: 80px;
  font-size: 16px;
  font-weight: 600;
  &:hover {
    background-color: darkgreen;
    color: white;
  }
`;

const PageNumber = styled.div`
  font-family: "Pretendard";
  font-weight: 500;
  margin-bottom: 3px;
`;
