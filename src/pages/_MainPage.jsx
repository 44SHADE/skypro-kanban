import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import Column from "../components/Column";
import Main from "../components/Main";
import Wrapper from "../components/Wrapper";
import PopExit from "../components/popups/popExit/popExit";

import filterCardsByStatus from "../utils/cardFilter";
import { testCardData } from "../../data";

const MainPage = () => {
  const [showPop, setShowPop] = useState(false);

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];
  // returned [ { status, data: [filtred cards] }, ...n ]
  const filtredCards = filterCardsByStatus(statuses, testCardData);

  return (
    <Wrapper>
      {showPop && <PopExit />}

      <Header onShow={() => setShowPop(!showPop)} />

      <Main>
        {filtredCards.map((card) => (
          <Column key={card.status} status={card.status} cards={card.data} />
        ))}
      </Main>
      <Outlet />
    </Wrapper>
  );
};

export default MainPage;
