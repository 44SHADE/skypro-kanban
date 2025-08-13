import styled from "styled-components";

const cardCategory = {
  "Web Design": "_orange",
  "Research": "_green",
  "Copywriting": "_purple",
};

const SCardTheme = styled.div`
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

export default function CardTheme({ topic }) {    
  return (
    <SCardTheme className={cardCategory[topic]}>
      <p>{topic}</p>
    </SCardTheme>
  );
}
