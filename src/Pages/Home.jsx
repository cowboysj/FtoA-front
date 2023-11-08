import React from "react";
import FlyingText from "../Components/FlyingText";
import styled from "styled-components";
import login from "../img/kakao.png";

const Wrap = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const Kakao = styled.img`
  display: flex;
  width: 30%;
  padding: 1%;
  cursor: pointer;
`;
export default function Home() {
  return (
    <Wrap>
      <FlyingText />
      <Kakao src={login} />
    </Wrap>
  );
}
