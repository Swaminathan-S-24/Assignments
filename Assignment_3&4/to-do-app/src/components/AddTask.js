import { useRef } from "react";

export default function AddTask({ saveTask, cancleTask }) {
  let taskContent = useRef();
  return (
    <div className="outer-div">
      <input
        ref={taskContent}
        type="text"
        placeholder="Add Task"
        className="input-text"
      />
      <button
        className="small-button"
        onClick={() => saveTask(taskContent.current.value)}
      >
        Save
      </button>
      <button className="small-button" onClick={cancleTask}>
        Cancle
      </button>
    </div>
  );
}
