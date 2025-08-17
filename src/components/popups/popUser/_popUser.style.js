import styled from "styled-components";

const SHeaderPopUser = styled.div`
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid ${(props) => props.theme.colors.border};
  background: ${(props) => props.theme.colors.bgSecond};
  box-shadow: 0px 10px 39px 0px  ${(props) => props.theme.isDark ? `rgba(148, 166, 190, 0.40)` : `rgba(26, 56, 101, 0.21)`};
  padding: 34px;
  text-align: center;
  z-index: 2;

  & button {
    width: 72px;
    height: 30px;
    background: transparent;
    color: #565eef;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.name === "light" ? "#565EEF" : "#FFFFFF"};
  }

  & button a {
    color: ${(props) => props.theme.name === "light" ? "#565EEF" : "#FFFFFF"};
  }
`;

const PopUserSetMail = styled.p`
  color: #94a6be;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

const PopUserSetName = styled(PopUserSetMail)`
  color: ${(props) => props.theme.fontColor};
  font-weight: 500;
  margin-bottom: 4px;
`;

const PopUserSetTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  & p {
    color: ${(props) => props.theme.fontColor};
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
  }
`;

const InputTheme = styled.input`
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 100px;
  background: #eaeef6;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.bgThird};
    transition: 0.5s;
  }
  
  &:checked[type=checkbox]::before {
  left: 12px;
  }
}
`;

export {
  SHeaderPopUser,
  PopUserSetMail,
  PopUserSetName,
  PopUserSetTheme,
  InputTheme,
};
