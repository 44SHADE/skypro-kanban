import { Link } from "react-router-dom";
import {SHeaderPopUser, PopUserSetMail, PopUserSetName, PopUserSetTheme, InputTheme} from "./_popUser.style";
import { getUserFromLocalStorage } from "../../../utils/localStorage";

export default function PopUser() {
  const user = getUserFromLocalStorage();
  return (
    <>
      <SHeaderPopUser>
        <a href="">x</a>
        <PopUserSetName>{user.name}</PopUserSetName>
        <PopUserSetMail>{user.mail || "тут mail"}</PopUserSetMail>
        <PopUserSetTheme className="pop-user-set__theme">
          <p>Темная тема</p>
          <InputTheme type="checkbox" name="checkbox"/>
        </PopUserSetTheme>
        <button type="button" className="_hover03">
          <Link to="/exit">Выйти</Link>
        </button>
      </SHeaderPopUser>
    </>
  );
}
