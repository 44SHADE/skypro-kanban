import useTasks from "../context/TaskContext/useTasks";
import styled from "styled-components";

import Column from "../components/Column";

import SContainer from "./style/containerStyle";

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

export default function Main() {
  const { statuses } = useTasks();

  return (
    <SMain>
      <SContainer>
        <SMainBlock>
          <SMainContent>
            {statuses.map((status) => (
              <Column key={status} status={status} />
            ))}
          </SMainContent>
        </SMainBlock>
      </SContainer>
    </SMain>
  );
}
