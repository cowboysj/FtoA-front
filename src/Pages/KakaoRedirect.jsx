import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import { BarLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { setId, setToken } from "../Redux/LoginSlice";
import axios from "axios";

const BackgroundWrap = styled.div`
  background: #fefaef;
`;

const Background = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  max-width: 37.5rem;
  margin: 0px auto;
  flex-direction: column;
  background: #fefaef;
  justify-content: center;
  align-items: center;
`;

const Text1 = styled.div`
  height: 10%;
  color: rgba(25, 25, 25, 0.8);
  text-align: center;
  font-family: "Pretendard";
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
`;

export function KakaoRedirect() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    console.log("00");
    if (code) {
      fetchData();
    } else {
      console.error("No authorization code found in the URL");
      // Handle the absence of the code parameter, e.g., redirect to an error page
    }
  }, [code]);

  const API_URL = "http://localhost:8080/oauth/kakao";

  async function fetchData() {
    try {
      const response = await axios.post(`${API_URL}?code=${code}`);
      const resdata = response.data;
      console.log(response);

      dispatch(setId(resdata.result.id));
      dispatch(setToken(resdata.result.token));

      navigate("/generate/step1");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <BackgroundWrap>
      <Background>
        <Text1>Loading</Text1>
        <BarLoader color="rgba(25, 25, 25, 0.8)" />
      </Background>
    </BackgroundWrap>
  );
}
export default KakaoRedirect;
