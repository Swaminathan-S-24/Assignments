import Button from "../UI_Elements/Button";
import { TaskContext } from "../store/Task-Context";

import { useContext, useRef } from "react";
export default function Task({ task }) {
  const taskValue = useRef();
  const taskContext = useContext(TaskContext);
  return (
    <>
      <li>
        {task.isEdit ? (
          <div>
            <input ref={taskValue} type="text" defaultValue={task.name} />
            <Button
              onClick={() =>
                taskContext.editTasks(task.id, taskValue.current.value, false)
              }
            >
              Save
            </Button>
            <Button onClick={() => taskContext.editTasksFlag(task.id, false)}>
              Cancel
            </Button>
          </div>
        ) : (
          <div>
            {/* <input type="text" value={task.name} ref={taskValue} /> */}
            <span>{task.name}</span>
            <Button onClick={() => taskContext.editTasksFlag(task.id, true)}>
              Edit
            </Button>
            <Button onClick={() => taskContext.deleteTasks(task.id)}>
              Delete
            </Button>
            <input
              type="checkbox"
              name="task"
              value={task.name}
              checked={task.isChecked}
              onChange={() => taskContext.updateTasks(task.id, !task.isChecked)}
            />
          </div>
        )}
      </li>
    </>
  );
}
