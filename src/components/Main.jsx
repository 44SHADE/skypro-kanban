import useTasks from "../context/TaskContext/useTasks";
import styled from "styled-components";

import { loaderMock } from "../shared/mock";

import Column from "../components/Column";
import Card from "../components/Card/Card";
import Loader from "../components/Loader";

import SContainer from "./style/containerStyle";
import { DragDropContext } from "@hello-pangea/dnd";

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
  const { statuses, filterCards, cards, loading, draggableUpdate, setCards } =
    useTasks();

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const newCardsPosition = Array.from(cards);
    const draggedCard = newCardsPosition.find(
      (card) => card._id === draggableId
    );
    draggedCard.status = destination.droppableId;
    newCardsPosition.splice(source.index, 1);
    newCardsPosition.splice(destination.index, 0, draggedCard);

    setCards(newCardsPosition);
    draggableUpdate(draggableId, draggedCard);
  };
  return (
    <SMain>
      <SContainer>
        <SMainBlock>
          <SMainContent>
            <DragDropContext onDragEnd={onDragEnd}>
              {statuses.map((status) => (
                <Column key={status} status={status}>
                  {loading
                    ? loaderMock(Loader, 4)
                    : filterCards(Card, status, cards)}
                </Column>
              ))}
            </DragDropContext>
          </SMainContent>
        </SMainBlock>
      </SContainer>
    </SMain>
  );
}
