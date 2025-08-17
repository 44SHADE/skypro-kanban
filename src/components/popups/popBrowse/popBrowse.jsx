import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import useTasks from "../../../context/TaskContext/useTasks";

import Calendar from "../../Calendar";
import Status from "./Status";
import BrowseBtn from "./Btn";
import { getTaskById } from "../../../services/api/tasksService";

export default function PopBrowse() {
  const [cardData, setCardData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const { updateCard, deleteCard, statuses } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  const categories = {
    "Web Design": "_orange",
    Research: "_green",
    Copywriting: "_purple",
  };

  const handleStatusChange = (e) => {
    const textStatus = e.target.textContent;
    const attrNameValue = e.target.getAttribute("name");
    setCardData({ ...cardData, [attrNameValue]: textStatus });
  };

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setCardData({ ...cardData, [name]: value });
  };

  useEffect(() => {
    getTaskById(params.id)
      .then((res) => setCardData(res.data.task))
      .catch((error) => error);
  }, [params.id]);

  const cancelEdit = () => setIsEditing((prev) => !prev);

  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">Название задачи</h3>
              <div
                className={`categories__theme theme-top ${
                  categories[cardData && cardData.topic]
                } _active-category`}
              >
                <p className={`${categories[cardData && cardData.topic]}`}>
                  {cardData && cardData.topic}
                </p>
              </div>
            </div>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                {statuses.map((status) => (
                  <Status
                    key={status}
                    statusName={status}
                    isActive={cardData?.status === status}
                    isHidden={!isEditing && cardData?.status !== status}
                    onClick={handleStatusChange}
                  />
                ))}
              </div>
            </div>
            <div className="pop-browse__wrap">
              <form
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                action="#"
              >
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-browse__area"
                    name="description"
                    id="textArea01"
                    placeholder="Введите описание задачи..."
                    value={cardData && cardData.description}
                    {...{ readOnly: isEditing ? false : true }}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </form>
              <div className="pop-new-card__calendar calendar">
                <p className="calendar__ttl subttl">Даты</p>
                <Calendar cardData={cardData} setCardData={setCardData} isEditing={isEditing}/>
              </div>
            </div>
            <div
              className={`pop-browse__btn-browse ${isEditing ? "_hide" : ""}`}
            >
              <div className="btn-group">
                <BrowseBtn
                  className={"btn-browse__edit _btn-bor _hover03"}
                  btnText={"Редактировать задачу"}
                  onClick={cancelEdit}
                />
                <BrowseBtn
                  className={"btn-browse__edit _btn-bor _hover03"}
                  btnText={"Удалить задачу"}
                  onClick={() => {
                    deleteCard(params.id);
                    navigate("/");
                  }}
                />
              </div>
              <button className="btn-browse__close _btn-bg _hover01">
                <Link to="/">Закрыть</Link>
              </button>
            </div>

            <div className={`pop-browse__btn-edit ${isEditing ? "" : "_hide"}`}>
              <div className="btn-group">
                <BrowseBtn
                  className={"btn-edit__edit _btn-bg _hover01"}
                  btnText={"Сохранить"}
                  onClick={() => {
                    updateCard(params.id, cardData);
                    navigate("/");
                  }}
                />
                <BrowseBtn
                  className={"btn-edit__edit _btn-bor _hover03"}
                  btnText={"Отменить"}
                  onClick={cancelEdit}
                />
                <BrowseBtn
                  className={"btn-edit__delete _btn-bor _hover03"}
                  btnText={"Удалить задачу"}
                  onClick={() => {
                    deleteCard(params.id);
                    navigate("/");
                  }}
                />
              </div>
              <button className="btn-browse__close _btn-bg _hover01">
                <Link to="/">Закрыть</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
