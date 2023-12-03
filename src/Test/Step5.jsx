import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Step5() {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const selectedImages = e.target.files;
    if (selectedImages) {
      const imageArray = Array.from(selectedImages).map((image) =>
        URL.createObjectURL(image)
      );
      setImages((prevImages) => [...prevImages, ...imageArray]);
    }
  };

  const handleLoading = () => {
    navigate("/step5loading");
  };

  return (
    <Div>
      <Title>시간표를 업로드해주세요!</Title>
      <CustomInputWrapper>
        <CustomInput
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
        />
        <CustomInputLabel>파일 선택</CustomInputLabel>
      </CustomInputWrapper>
      {images.length > 0 && (
        <div>
          {images.map((image, index) => (
            <Img key={index} src={image} alt={`업로드한 이미지 ${index}`} />
          ))}
          <SubmitWrap>
            <Submit onClick={handleLoading}>제출</Submit>
          </SubmitWrap>
        </div>
      )}
    </Div>
  );
}

export default Step5;

const Div = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-family: Pretendard;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
  margin-top: 30px;
`;

const Img = styled.img`
  margin: 10px;
  width: 250px;
  margin-top: 20px;
`;

const SubmitWrap = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
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

const CustomInputWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: inline-block;
`;

const CustomInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const CustomInputLabel = styled.label`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;
