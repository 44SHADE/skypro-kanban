import styled from "styled-components";

const SWrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f1f1f1;
`;

export default function Wrapper({ children }) {
  return (
    <>
      <SWrapper className="wrapper">{children}</SWrapper>
    </>
  );
}
