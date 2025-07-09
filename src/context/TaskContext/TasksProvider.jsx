import { useEffect, useState } from "react";
import { TasksContext } from "./TasksContext";
import filterCardsByStatus from "../../utils/cardFilter";
import { getTasks } from "../../services/api/tasksService";
import useAuth from "../AuthContext/useAuth";

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
    if(!user) return undefined;
    getTasks()
      .then((req) => {
        // returned [ { status, data: [filtred cards] }, ...n ]
        const filtredCards = filterCardsByStatus(statuses, req.data.tasks);
        setCards(filtredCards);
      })
      .catch((error) => alert(error))
      .finally(() => setLoading(false));
  }, [user]);

  return (
    <TasksContext.Provider value={{ cards, setCards, loading, statuses }}>
      {children}
    </TasksContext.Provider>
  );
}
