import useTasks from "../context/TaskContext/useTasks";
import { useEffect,useState } from "react";
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
  const { cards, loading } = useTasks();

  return loading ? (
    <p style={{ textAlign: "center", paddingTop: "10px" }}>Данные загружаются...</p>
  ) : (
    <SMain>
      <SContainer>
        <SMainBlock>
          <SMainContent>
            {cards.length !== 0 ? (
              cards.map((card) => (
                <Column
                  key={card.status}
                  status={card.status}
                  cards={card.data}
                />
              ))
            ) : (
              <p style={{ color: "rgb( 145, 102, 187)", textAlign: "center" }}>
                Кажется, Вы пока не создали ни одной задачи! Нажмите "Создать
                новую задачу" и она появится здесь!
              </p>
            )}
          </SMainContent>
        </SMainBlock>
      </SContainer>
    </SMain>
  );
}
