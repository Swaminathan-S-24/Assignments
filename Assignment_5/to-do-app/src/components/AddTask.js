import { useContext, useRef } from "react";
import { TaskContext } from "../store/Task-Context";
import Button from "../UI_Elements/Button";
export default function AddTask({ onAdd, onCancle }) {
  const taskName = useRef();
  let taskContext = useContext(TaskContext);
  function handleAddTask() {
    taskContext.addTasks(taskName.current.value);
    onAdd();
  }
  return (
    <>
      <input type="text" ref={taskName} placeholder="Add Task" />
      <Button onClick={handleAddTask}>Add</Button>
      <Button onClick={onCancle}>Cancel</Button>
      {/* <Button onClick={() => taskContext.addTaskBtn(false)}>Cancel</Button> */}
    </>
  );
}
