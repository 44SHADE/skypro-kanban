import "./App.css";
import Calendar from "./components/Calendar";
import Card from "./components/Card";
import Column from "./components/Column";
import Header from "./components/Header";
import Main from "./components/Main";

import PopBrowse from "./components/popups/popBrowse";
import PopExit from "./components/popups/popExit";
import PopNewCard from "./components/popups/popNewCard";

function App() {
  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

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
          <Column status={statuses[0]}>
            <Card />
          </Column>
          <Column status={statuses[1]}>
            <Card />
          </Column>
          <Column status={statuses[2]}>
            <Card />
          </Column>
          <Column status={statuses[3]}>
            <Card />
          </Column>
          <Column status={statuses[4]}>
            <Card />
          </Column>
        </Main>
      </div>

      {/* <script src="js/script.js"></script> */}
    </>
  );
}

export default App;
