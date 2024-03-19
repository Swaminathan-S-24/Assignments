import Delete from "./Delete";
import MarckAsComplete from "./MarckAsComplete";
import { useState } from "react";

export default function Lists({ curTaskList, deleteTask, editTask }) {
  const [editTaskIndex, setEditTaskIndex] = useState(-1);
  const [editedTask, setEditedTask] = useState("");

  function handleEditClick(index, task) {
    setEditTaskIndex(index);
    setEditedTask(task);
  }

  function handleSaveClick(index) {
    editTask(index, editedTask);
    setEditTaskIndex(-1);
    setEditedTask("");
  }

  function handleInputChange(e) {
    setEditedTask(e.target.value);
  }

  function handleCancleClick() {
    setEditTaskIndex(-1);
    setEditedTask("");
  }
  if (curTaskList.length == 0) {
    // If not an array, you can return a message or an empty list
    return <p className="para">No tasks available</p>; // Example message
  } else {
    return (
      <ul>
        {curTaskList.map((task, index) => (
          <li key={index} className="task-list">
            {index === editTaskIndex ? (
              <div className="div-1">
                <input
                  type="text"
                  defaultValue={task}
                  onChange={handleInputChange}
                  className="input-text"
                />
                <button
                  className="small-button"
                  onClick={() => handleSaveClick(index)}
                >
                  Save
                </button>
                <button className="small-button" onClick={handleCancleClick}>
                  Cancel
                </button>
              </div>
            ) : (
              <div className="div-list">
                <span className="task-span">{task}</span>
                <div className="div-2">
                  <button
                    className="small-button"
                    onClick={() => handleEditClick(index, task)}
                  >
                    Edit
                  </button>
                  <Delete deleteTask={() => deleteTask(task)} />
                  <MarckAsComplete />
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  }
  // if (!Array.isArray(curTaskList)) {
  //   // If not an array, you can return a message or an empty list
  //   return <p>No tasks available</p>; // Example message
  // } else {
  //   return (
  //     <ul>
  //       {curTaskList.map((task, index) => {
  //         return (
  //           <li key={index}>
  //             {task} <Delete deleteTask={() => deleteTask(task)} />
  //             <EditTask editTask={() => editTask(true, task)} />
  //             <MarckAsComplete />
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   );
  // }
}
