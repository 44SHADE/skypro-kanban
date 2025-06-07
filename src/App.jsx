import "./App.css";
import Calendar from "./components/Calendar";
import Column from "./components/Column";
import Header from "./components/Header";
import Main from "./components/Main";

import PopBrowse from "./components/popups/popBrowse";
import PopExit from "./components/popups/popExit";
import PopNewCard from "./components/popups/popNewCard";

import { testCardData } from "../data";
import filterCardsByStatus from "./utils/cardFilter";

function App() {
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
    <>
      <div className="wrapper">
        <PopExit />

        <PopNewCard>
          <Calendar />
        </PopNewCard>

        <PopBrowse>
          <Calendar />
        </PopBrowse>

        <Header />

        <Main>
          {filtredCards.map((card) => (
            <Column key={card.status} status={card.status} cards={card.data} />
          ))}
        </Main>
      </div>

      {/* <script src="js/script.js"></script> */}
    </>
  );
}

export default App;
