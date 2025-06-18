import { Link } from "react-router-dom";
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
  return (
    <SPopExit>
      <SPopExitContainer>
        <SPopExitBlock>
          <PopExitTTL>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTTL>
          <form className="pop-exit__form" id="formExit" action="#">
            <PopExitFormGroup>
              <PopExitBtnYes className="_hover01">
                <Link to="/login">Да, выйти</Link>
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
