import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { createNewTask } from "../../../services/api/tasksService";
import { notify } from "../../../shared/notifications";
import useTasks from "../../../context/TaskContext/useTasks";

import Calendar from "../../Calendar";
import Category from "./Categories";

export default function PopNewCard() {
  const navigate = useNavigate();
  const { setCards } = useTasks();
  const [isActive, setIsActive] = useState(-1);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    topic: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleActiveCategoryClick = (e, index) => {
    const { textContent } = e.target;
    const attributeTopic = e.target.getAttribute("name");
    setIsActive(index);
    setFormData({ ...formData, [attributeTopic]: textContent });
  };

  const createTask = () => {
    createNewTask(formData)
      .then((req) => {
        setCards(req.data.tasks);
        notify("Успех!", "Задача добавлена", "success")
        navigate("/");
      })
      .catch((err) => err);
  };

  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <Link to="/" className="pop-new-card__close">
              &#10006;
            </Link>
            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                id="formNewCard"
                action="#"
              >
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    className="form-new__input"
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-new__area"
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </form>
              <div className="pop-new-card__calendar calendar">
                <p className="calendar__ttl subttl">Даты</p>
                <Calendar />
              </div>
            </div>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <Category
                  category={"Web Design"}
                  colorClass={"_orange"}
                  isActive={isActive === 0}
                  onActive={(e) => handleActiveCategoryClick(e, 0)}
                />
                <Category
                  category={"Research"}
                  colorClass={"_green"}
                  isActive={isActive === 1}
                  onActive={(e) => handleActiveCategoryClick(e, 1)}
                />
                <Category
                  category={"Copywriting"}
                  colorClass={"_purple"}
                  isActive={isActive === 2}
                  onActive={(e) => handleActiveCategoryClick(e, 2)}
                />
              </div>
            </div>
            <button
              className="form-new__create _hover01"
              id="btnCreate"
              onClick={createTask}
            >
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
