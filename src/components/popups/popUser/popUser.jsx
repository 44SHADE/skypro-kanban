import { Link } from "react-router-dom";
import {SHeaderPopUser, PopUserSetMail, PopUserSetName, PopUserSetTheme, InputTheme} from "./_popUser.style";

export default function PopUser() {
  return (
    <>
      <SHeaderPopUser>
        <a href="">x</a>
        <PopUserSetName>Ivan Ivanov</PopUserSetName>
        <PopUserSetMail>ivan.ivanov@gmail.com</PopUserSetMail>
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
