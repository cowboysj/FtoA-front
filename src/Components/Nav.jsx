import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../img//logo.png";

const Div = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  border-bottom: 0.7px solid black;
`;
const Wrap = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  align-items: center;
  margin: 0 auto;
`;
const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8%;
  height: 60%;
`;
const Logo = styled.img`
  display: flex;
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

const MenuWrap = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
`;

const Menu = styled.div`
  display: flex;
  padding-left: 10%;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
`;

export default function Nav() {
  const navigate = useNavigate();

  const handleMainClick = () => {
    navigate("/");
  };
  const handleCommunityClick = () => {
    navigate("/generate");
  };

  return (
    <Div>
      <Wrap>
        <LogoWrap onClick={handleMainClick}>
          <Logo src={logo} alt="로고" />
        </LogoWrap>
        <MenuWrap>
          <Menu onClick={handleCommunityClick}>문제 생성</Menu>
        </MenuWrap>
      </Wrap>
    </Div>
  );
}
