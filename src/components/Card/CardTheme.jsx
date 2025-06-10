import styled from "styled-components";

const cardCategory = {
  "Web Design": {
    background: "#FFE4C2",
    text: "#FF6D00",
  },
  "Research": {
    background: "#B4FDD1",
    text: "#06B16E",
  },
  "Copywriting": {
    background: "#E9D4FF",
    text: "#9A48F1",
  },
};

const cardColor =  ($theme) => {
    const color = cardCategory[$theme]; 
    if(color) return `background-color: ${color.background}; color: ${color.text};`
    return `background-color: #94A6BE; color: #FFFFFF;`
}

const SCardTheme = styled.div`
  ${({$theme}) => cardColor($theme)}
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

export default function CardTheme({ theme }) {    
  return (
    <SCardTheme $theme={theme}>
      <p>{theme}</p>
    </SCardTheme>
  );
}
