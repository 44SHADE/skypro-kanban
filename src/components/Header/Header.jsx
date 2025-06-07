import HeaderLogo from "./HeaderLogo.jsx";
import PopUser from "../popups/popUser/popUser.jsx";
import SContainer from "../style/containerStyle";
import {SHeader, SHeaderBlock, SHeaderBtnMainNew, SHeaderNav, SHeaderUser} from "./_header.style.js";
import { useState } from "react";

export default function Header({onShow}) {
  const [popVisible, setPopVisible] = useState(false);

  function handlePopVisible() {
    setPopVisible((preState) => !preState);
  }

  return (
    <SHeader>
      <SContainer>
        <SHeaderBlock>
          <HeaderLogo />

          <SHeaderNav>
            <SHeaderBtnMainNew className="_hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </SHeaderBtnMainNew>
            <SHeaderUser onClick={handlePopVisible}>
              Ivan Ivanov
            </SHeaderUser>
            {popVisible && <PopUser handlePopExitShow={onShow}/>}
          </SHeaderNav>
          
        </SHeaderBlock>
      </SContainer>
    </SHeader>
  );
}
