import {
  SPopExit,
  SPopExitBlock,
  SPopExitContainer,
  PopExitBtnNo,
  PopExitBtnYes,
  PopExitFormGroup,
  PopExitTTL,
} from "./popExit.style";

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
              <PopExitBtnYes className="_hover01" id="exitYes">
                <a href="modal/signin.html">Да, выйти</a>
              </PopExitBtnYes>
              <PopExitBtnNo className="_hover03" id="exitNo">
                <a href="main.html">Нет, остаться</a>
              </PopExitBtnNo>
            </PopExitFormGroup>
          </form>
        </SPopExitBlock>
      </SPopExitContainer>
    </SPopExit>
  );
}
