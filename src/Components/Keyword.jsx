import React from "react";
import styled from "styled-components";

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

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 60vh;
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
  height: 40vh;
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

const ButtonWrap = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
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
  margin-top: 10px;
`;

export default function Keyword() {
  return (
    <Wrap>
      <Text1>키워드 가리기 유형 </Text1>
      <Content>
        임진왜란은 1592년부터 1598년까지 2차에 걸쳐서 우리나라에 침입한 일본과의
        싸움이다. 엄청난 시련을 겪으면서도 끈질긴 저항으로 이겨내고 각성과
        자기성찰을 바탕으로 민족의 운명을 새로 개척해나간 계기가 된 전쟁이다.
        명의 원조도 있었지만 승리의 가장 큰 원동력은 max으로, 이순신에 의한
        제해권의 장악과 전국에서 봉기한 의병의 활동은 불리했던 전쟁 국면을
        전환시킨 결정적인 힘이었다. 이 전란은 동아시아의 국제 정세를 크게
        변화시키는 결과를 가져와, 명과 청이 교체되면서 병자호란이라는 시련을
        예고하기도 했다. 조선이 임진왜란을 당하여 전쟁 초기 이를 감당하기 어려울
        정도로 국력이 쇠약해진 것은 왜란이 일어난 선조대에 이르러서 비롯된 것은
        아니었다. 이미 훨씬 이전부터 중쇠의 기운이 나타나기
        시작하였다.정치적으로는 연산군 이후 명종대에 이르는 4대 사화와 훈구·사림
        세력간에 계속된 정쟁으로 인한 중앙 정계의 혼란, 사림 세력이 득세한 선조
        즉위 이후 격화된 당쟁 등으로 정치의 정상적인 운영을 수행하기 어려운
        지경이었다.군사적으로도 조선 초기에 설치된 국방체제가 붕괴되어 외침에
        대비하기 위한 방책으로 군국기무를 장악하는 비변사라는 합의 기관을
        설치했으나, 이것 또한 정상적인 기능을 발휘하지 못하였다.이이는
        남왜북호의 침입에 대처하기 위하여 십만양병설을 주장하기도 하였다. 그러나
        국가 재정의 허약으로 뜻을 이루지 못하고, 사회는 점점 해이해지고 문약에
        빠져 근본적인 국가 방책이 확립되지 못한 실정이었다.이러할 즈음
        일본에서는 새
      </Content>
      <ButtonWrap>
        <NextButton>제출 </NextButton>
      </ButtonWrap>
    </Wrap>
  );
}
