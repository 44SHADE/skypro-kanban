import {
  Wrapper,
  ContainerSignIn,
  Modal,
  ModalBlock,
  ModalBtnEnter,
  ModalFormGroup,
  ModalFormLogin,
  ModalInput,
  ModalTTL,
} from "./_signIn.style";

export default function SignIn() {
  return (
    <Wrapper>
      <ContainerSignIn>
        <Modal>
          <ModalBlock>
            <ModalTTL>
              <h2>Вход</h2>
            </ModalTTL>
            <ModalFormLogin id="formLogIn" action="#">
              <ModalInput
                className="modal__input"
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <ModalInput
                className="modal__input"
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
              <ModalBtnEnter className="_hover01">
                <a>Войти</a>
              </ModalBtnEnter>
              <ModalFormGroup>
                <p>Нужно зарегистрироваться?</p>
                <a>Регистрируйтесь здесь</a>
              </ModalFormGroup>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSignIn>
    </Wrapper>
  );
}
