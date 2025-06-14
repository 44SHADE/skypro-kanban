import Column from "./components/Column";
import Header from "./components/Header/Header";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";

import PopExit from "./components/popups/popExit/popExit";

import { testCardData } from "../data";
import filterCardsByStatus from "./utils/cardFilter";
import { useState } from "react";

function App() {
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

        <Header onShow={() => setShowPop(!showPop)}/>

        <Main>
          {filtredCards.map((card) => (
            <Column key={card.status} status={card.status} cards={card.data} />
          ))}
        </Main>
      </Wrapper>
  );
}

export default App;
