import { Link, useNavigate } from "react-router-dom";

import useAuth from "../../../context/AuthContext/useAuth";

import {
  SPopExit,
  SPopExitBlock,
  SPopExitContainer,
  PopExitBtnNo,
  PopExitBtnYes,
  PopExitFormGroup,
  PopExitTTL,
} from "./_popExit.style";

export default function PopExit() {
  const {logout} = useAuth()
  const navigate = useNavigate();

  const handleOut = (e) => {
    e.preventDefault();
    logout();
    navigate("/login");
  }
  return (
    <SPopExit>
      <SPopExitContainer>
        <SPopExitBlock>
          <PopExitTTL>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTTL>
          <form className="pop-exit__form" id="formExit">
            <PopExitFormGroup>
              <PopExitBtnYes className="_hover01" onClick={handleOut}>
                <a>Да, выйти</a>
              </PopExitBtnYes>
              <PopExitBtnNo className="_hover03">
                <Link to="/">Нет, остаться</Link>
              </PopExitBtnNo>
            </PopExitFormGroup>
          </form>
        </SPopExitBlock>
      </SPopExitContainer>
    </SPopExit>
  );
}
