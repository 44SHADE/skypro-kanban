import { useEffect, useState } from "react";
import { TasksContext } from "./TasksContext";
import filterCardsByStatus from "../../utils/cardFilter";
import {
  getTasks,
  deleteTask,
  updateTask,
} from "../../services/api/tasksService";
import useAuth from "../AuthContext/useAuth";
import { notify } from "../../shared/notifications";

export default function TasksProvider({ children }) {
  const { user } = useAuth();
  const [cards, setCards] = useState([]);
  const [notFiltredCards, setNotFiltredCards] = useState([]);
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
        setNotFiltredCards(res.data.tasks);
        // returned [ { status, data: [filtred cards] }, ...n ]
        const filtredCards = filterCardsByStatus(statuses, res.data.tasks);
        setCards(filtredCards);
      })
      .catch((error) => error)
      .finally(() => setLoading(false));
  }, [user]);

  const deleteCard = (id) => {
    deleteTask(id)
      .then((res) => {
        setNotFiltredCards(res.data.tasks);
        const filtredCards = filterCardsByStatus(statuses, res.data.tasks);
        setCards(filtredCards);
        notify("Успех!", `Карточка id: ${id} удалена!`, "success");
      })
      .catch((error) => error);
    return true;
  };

  const updateCard = (id, data) => {
    setLoading(true);
    updateTask(id, data)
      .then((res) => {
        setNotFiltredCards(res.data.tasks);
        const filtredCards = filterCardsByStatus(statuses, res.data.tasks);
        setCards(filtredCards);
        notify("Успех!", `Карточка ${data.title} обновлена`, "success");
      })
      .catch((error) => error)
      .finally(() => setLoading(false));
  };

  return (
    <TasksContext.Provider
      value={{
        cards,
        notFiltredCards,
        loading,
        statuses,
        setCards,
        setNotFiltredCards,
        deleteCard,
        updateCard,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
