import {
  Wrapper,
  ContainerSignUp,
  Modal,
  ModalBlock,
  ModalBtnSignUpEnt,
  ModalFormGroup,
  ModalFormLogin,
  ModalInput,
  ModalTTL,
} from "./_signUp.style";

export default function SignIn() {
  return (
    <Wrapper>
      <ContainerSignUp>
        <Modal>
          <ModalBlock>
            <ModalTTL>
              <h2>Регистрация</h2>
            </ModalTTL>
            <ModalFormLogin id="formLogIn" action="#">
              <ModalInput
                className="first-name"
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Имя"
              />
              <ModalInput
                className="login"
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              />
              <ModalInput
                className="password-first"
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              />
              <ModalBtnSignUpEnt className="_hover01">
                <a>Зарегистрироваться</a>
              </ModalBtnSignUpEnt>
              <ModalFormGroup>
                <p>
                  Уже есть аккаунт? <a>Войдите здесь</a>
                </p>
              </ModalFormGroup>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSignUp>
    </Wrapper>
  );
}
