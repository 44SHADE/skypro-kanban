import NotFound404 from "../assets/NotFound404.gif";
import styled from "styled-components";

const SErrorContainer = styled.div`
  @media screen and (max-width: 495px) {
    width: 100%;
    padding: 0 16px;
    text-align: center;
    
    & img {
      width: 100%;
    }
  }

  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  background-color: black;
  color: #fff;

  & img {
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export default function NotFound() {
  return (
    <>
      <SErrorContainer>
        <h1>Page Not Found...</h1>
        <img src={NotFound404} alt="404 not found gif" />
      </SErrorContainer>
    </>
  );
}
