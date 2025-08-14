import { useContext } from "react";
import { TasksContext } from "./TasksContext";

export default function useTasks() {
  const context = useContext(TasksContext);
  if (!context) throw new Error("useTasks must be used with Tasks Provider");
  return context;
}
