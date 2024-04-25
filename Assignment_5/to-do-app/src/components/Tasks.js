import Task from "./Task";
import { useContext } from "react";
import { TaskContext } from "../store/Task-Context";

// let tasks = [1, 2, 2, 3, 4];
export default function Tasks() {
  let taskContext = useContext(TaskContext);
  return (
    <ul>
      {taskContext.tasks.map((task) => (
        <Task key={Math.random()} task={task} />
      ))}
    </ul>
  );
}
