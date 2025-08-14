import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { login } from "../../services/api/auth/login";
import { validateAuthForms } from "../../utils/validateForm";
import useAuth from "../../context/AuthContext/useAuth";

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
  const [formData, setFormData] = useState({ login: "", password: "" });
  const { loginState } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const isValid = validateAuthForms(formData);
    if (!isValid) {
      alert("Заполните все поля!");
      return null;
    }
    login(formData)
      .then((res) => {
        const user = res.data.user;
        loginState(user);
        navigate("/");
      })
      .catch((error) => alert(error));
  };
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
                onChange={handleChange}
              />
              <ModalInput
                className="modal__input"
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
                onChange={handleChange}
              />
              <ModalBtnEnter className="_hover01" onClick={handleLogin}>
                <a>Войти</a>
              </ModalBtnEnter>
              <ModalFormGroup>
                <p>Нужно зарегистрироваться?</p>
                <Link to="/register">Регистрируйтесь здесь</Link>
              </ModalFormGroup>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSignIn>
    </Wrapper>
  );
}
