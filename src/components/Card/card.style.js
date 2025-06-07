import styled from "styled-components";

const SCardsItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

const SCardsCard = styled.div`
  @media screen and (max-width: 1200px) {
    width: 220px;
    height: 130px;
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
  }

  width: 220px;
  height: 130px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
`;

const SCardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SCardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;

  & p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
  }
`;

const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
`;

const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94a6be;
    letter-spacing: 0.2px;
  }
`;
export {
  SCardsCard,
  SCardsItem,
  SCardContent,
  SCardGroup,
  CardTheme,
  CardTitle,
  CardDate,
};
