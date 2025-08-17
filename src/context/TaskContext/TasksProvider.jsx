import { useEffect, useState } from "react";
import { TasksContext } from "./TasksContext";

import {
  getTasks,
  deleteTask,
  updateTask,
} from "../../services/api/tasksService";
import useAuth from "../AuthContext/useAuth";
import { notify } from "../../shared/notifications";
import { Draggable } from "@hello-pangea/dnd";

export default function TasksProvider({ children }) {
  const { user } = useAuth();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  useEffect(() => {
    if (!user) return undefined;
    getTasks()
      .then((res) => {
        setCards(res.data.tasks);
      })
      .catch((error) => error)
      .finally(() => setLoading(false));
  }, [user]);

  const deleteCard = (id) => {
    deleteTask(id)
      .then((res) => {
        setCards(res.data.tasks);
        notify("Успех!", `Карточка id: ${id} удалена!`, "success");
      })
      .catch((error) => error);
    return true;
  };

  const updateCard = (id, data) => {
    updateTask(id, data)
      .then((res) => {
        setCards(res.data.tasks);
        notify("Успех!", `Карточка ${data.title} обновлена`, "success");
      })
      .catch((error) => error);
  };

  const draggableUpdate = (id, data) => {
    updateTask(id, data).catch((error) => error);
  };

  function filterCards(CardComponent, status, cards) {
    if (!Array.isArray(cards) || cards.length === 0) return [];
    return cards.map((card, index) => {
      if (card.status === status) {
        return (
          <Draggable
            key={`draggable-el-${card._id}`}
            draggableId={card._id}
            index={index}
          >
            {(provided, snapshot) => (
              <CardComponent
                key={card._id}
                id={card._id}
                topic={card.topic}
                title={card.title}
                date={card.date}
                snapshot={snapshot}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              />
            )}
          </Draggable>
        );
      }
    });
  }

  return (
    <TasksContext.Provider
      value={{
        cards,
        loading,
        statuses,
        setCards,
        deleteCard,
        updateCard,
        draggableUpdate,
        filterCards,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
