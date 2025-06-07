import { useEffect, useState } from "react";
import SContainer from "./style/containerStyle";
import styled from "styled-components";

const SMain = styled.main`
  width: 100%;
  background-color: #eaeef6;
`;

const SMainBlock = styled.div`
  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 64px;
  }

  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
`;

const SMainContent = styled.div`
  @media screen and (max-width: 1200px) {
    display: block;
  }

  width: 100%;
  display: flex;
`;

export default function Main({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <SMain>
      <SContainer>
        <SMainBlock>
          <SMainContent>
            {loading ? <p>Данные загружаются...</p> : children}
          </SMainContent>
        </SMainBlock>
      </SContainer>
    </SMain>
  );
}
