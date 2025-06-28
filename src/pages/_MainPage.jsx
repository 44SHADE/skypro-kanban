import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import Column from "../components/Column";
import Main from "../components/Main";
import Wrapper from "../components/Wrapper";
import PopExit from "../components/popups/popExit/popExit";

import filterCardsByStatus from "../utils/cardFilter";
import { getTasks } from "../services/api/tasksService";

const MainPage = () => {
  const [cards, setCards] = useState([]);
  const [showPop, setShowPop] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  useEffect(() => {
    getTasks()
      .then((req) => {
        // returned [ { status, data: [filtred cards] }, ...n ]
        const filtredCards = filterCardsByStatus(statuses, req.data.tasks);
        setCards(filtredCards);
      })
      .catch((error) => alert(error.response.data.error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Wrapper>
      {showPop && <PopExit />}

      <Header onShow={() => setShowPop(!showPop)} />

      <Main loading={loading} setLoading={setLoading}>
        {cards.map((card) => (
          <Column key={card.status} status={card.status} cards={card.data} />
        ))}
      </Main>
      <Outlet />
    </Wrapper>
  );
};

export default MainPage;
