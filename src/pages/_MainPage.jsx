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
      .catch((error) => alert(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Wrapper>
      {showPop && <PopExit />}

      <Header onShow={() => setShowPop(!showPop)} />

      <Main loading={loading} setLoading={setLoading}>
        {cards.length !== 0 ? cards.map((card) => (
          <Column key={card.status} status={card.status} cards={card.data} />
        )) : <p style={{color: "red"}}>Кажется, Вы пока не создали ни одной задачи! Нажмите "Создать новую задачу" и она появится здесь!</p>}
      </Main>
      <Outlet context={[setCards, statuses]}/>
    </Wrapper>
  );
};

export default MainPage;
