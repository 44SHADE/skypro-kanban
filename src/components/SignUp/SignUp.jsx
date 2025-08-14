import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { register } from "../../services/api/auth/register";
import { validateAuthForms } from "../../utils/validateForm";

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

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const isValid = validateAuthForms(formData);
    if (!isValid) {
      alert("Заполните все поля!");
      return null;
    }

    register(formData)
      .then(() => navigate("/login"))
      .catch((error) => alert(error));
  };
  return (
    <Wrapper>
      <ContainerSignUp>
        <Modal>
          <ModalBlock>
            <ModalTTL>
              <h2>Регистрация</h2>
            </ModalTTL>
            <ModalFormLogin id="formLogIn">
              <ModalInput
                className="first-name"
                type="text"
                name="name"
                id="first-name"
                placeholder="Имя"
                value={formData.name}
                onChange={handleChange}
              />
              <ModalInput
                className="login"
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
                value={formData.login}
                onChange={handleChange}
              />
              <ModalInput
                className="password-first"
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
                value={formData.password}
                onChange={handleChange}
              />
              <ModalBtnSignUpEnt className="_hover01" onClick={handleRegister}>
                <a>Зарегистрироваться</a>
              </ModalBtnSignUpEnt>
              <ModalFormGroup>
                <p>
                  Уже есть аккаунт? <Link to="/login">Войдите здесь</Link>
                </p>
              </ModalFormGroup>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSignUp>
    </Wrapper>
  );
}
