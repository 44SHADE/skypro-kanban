import HeaderLogo from "./HeaderLogo.jsx";
import PopUser from "../popups/popUser/popUser.jsx";
import SContainer from "../style/containerStyle";
import {SHeader, SHeaderBlock, SHeaderBtnMainNew, SHeaderNav, SHeaderUser} from "./_header.style.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getUserFromLocalStorage } from "../../utils/localStorage.js";

export default function Header() {
  const [popVisible, setPopVisible] = useState(false);

  const user = getUserFromLocalStorage();
  function handlePopVisible() {
    setPopVisible((preState) => !preState);
  }

  return (
    <SHeader>
      <SContainer>
        <SHeaderBlock>
          <HeaderLogo />

          <SHeaderNav>
            <SHeaderBtnMainNew className="_hover01">
              <Link to="/create-card">Создать новую задачу</Link>
            </SHeaderBtnMainNew>
            <SHeaderUser onClick={handlePopVisible}>
              {user.login}
            </SHeaderUser>
            {popVisible && <PopUser/>}
          </SHeaderNav>
          
        </SHeaderBlock>
      </SContainer>
    </SHeader>
  );
}
