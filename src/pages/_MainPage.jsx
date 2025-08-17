import { useState } from "react";
import { Outlet } from "react-router-dom";

import TasksProvider from "../context/TaskContext/TasksProvider";
import { SToastContainer } from "../shared/notifications";

import Header from "../components/Header/Header";
import Main from "../components/Main";
import Wrapper from "../components/Wrapper";
import PopExit from "../components/popups/popExit/popExit";

const MainPage = () => {
  const [showPop, setShowPop] = useState(false);

  return (
    <TasksProvider>
      <Wrapper>
        {showPop && <PopExit />}
        <Header onShow={() => setShowPop(!showPop)} />
        <Main />
        <Outlet />
        <SToastContainer />
      </Wrapper>
    </TasksProvider>
  );
};

export default MainPage;
