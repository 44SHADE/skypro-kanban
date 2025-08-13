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
    background-color: ${(props) => props.theme.colors.bgSecond};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
  }

  width: 220px;
  height: 130px;
  background-color: ${(props) => props.theme.colors.bgSecond};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
  box-shadow: ${(props) =>
    props.$isDragging ? "0 10px 39px rgba(148, 166, 190, 0.4)" : "none"};
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

const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${(props) => props.theme.fontColor};
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

const CardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
`;

const CardBtnDiv = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #94a6be;
`;

export {
  SCardsCard,
  SCardsItem,
  SCardContent,
  SCardGroup,
  CardTitle,
  CardDate,
  CardBtn,
  CardBtnDiv,
};
