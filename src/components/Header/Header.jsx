import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext.js";

import HeaderLogo from "./HeaderLogo.jsx";
import PopUser from "../popups/popUser/popUser.jsx";

import SContainer from "../style/containerStyle";
import {
  SHeader,
  SHeaderBlock,
  SHeaderBtnMainNew,
  SHeaderNav,
  SHeaderUser,
} from "./_header.style.js";

export default function Header() {
  const { user } = useContext(AuthContext);
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
            <SHeaderBtnMainNew className="_hover01">
              <Link to="/create-card">Создать новую задачу</Link>
            </SHeaderBtnMainNew>
            <SHeaderUser onClick={handlePopVisible}>{user ? user.login : ""}</SHeaderUser>
            {popVisible && <PopUser />}
          </SHeaderNav>
        </SHeaderBlock>
      </SContainer>
    </SHeader>
  );
}
