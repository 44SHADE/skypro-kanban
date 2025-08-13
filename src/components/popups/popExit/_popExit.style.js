import styled from "styled-components";

const SPopExit = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`;

const SPopExitContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

const SPopExitBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.bgSecond};
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid ${(props) => props.theme.colors.border};
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`;

const PopExitTTL = styled.div`
  & h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.4px;
    margin-bottom: 20px;
  }
`;

const PopExitFormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PopExitBtnNo = styled.button`
  width: 153px;
  height: 30px;
  background-color: transparent;
  border-radius: 4px;
  border: 0.7px solid ${(props) => (props.theme.name === "light" ? "#565EEF" : "#FFFFFF")};
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;

  & a {
    color: ${(props) => (props.theme.name === "light" ? "#565EEF" : "#FFFFFF")};
  }
`;

const PopExitBtnYes = styled(PopExitBtnNo)`
  background-color: #565eef;
  border-radius: 4px;
  border: none;
  margin-right: 10px;

  & a {
    color: #ffffff;
  }
`;

export {
  SPopExit,
  SPopExitBlock,
  SPopExitContainer,
  PopExitBtnNo,
  PopExitBtnYes,
  PopExitFormGroup,
  PopExitTTL,
};
