import { Droppable } from "@hello-pangea/dnd";
import styled from "styled-components";

const SMainColumn = styled.div`
  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    display: block;
  }

  width: 20%;
  margin: 0 auto;
  display: block;
`;

const SColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;

  & p {
    color: #94a6be;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }
`;

const SCards = styled.div`
  @media screen and (max-width: 1200px) {
    width: 100%;
    display: flex;
    overflow-y: auto;
  }

  width: 100%;
  display: block;
  position: relative;
}
`;

export default function Column({ children, status }) {
  return (
    <SMainColumn>
      <SColumnTitle>
        <p>{status}</p>
      </SColumnTitle>
      <Droppable droppableId={status} type="COLUMN" direction={window.innerWidth <= 1200 ? "horizontal" : "vertical"}>
        {(provided) => (
          <SCards {...provided.droppableProps} ref={provided.innerRef}>
            {children}
            {provided.placeholder}
          </SCards>
        )}
      </Droppable>
    </SMainColumn>
  );
}
