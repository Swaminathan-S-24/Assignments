import "./App.css";
import Add from "./components/Add";
import AddTask from "./components/AddTask";
import ErrorPopUp from "./components/ErrorPopUp";
import Lists from "./components/List";
import { useState } from "react";

function App() {
  const [addTask, setAddTask] = useState(false);
  const [curTaskList, updateCurTaskList] = useState([]);
  const [errorTab, setErrorTab] = useState(false);
  function handleAdd() {
    setAddTask(true);
  }

  function handleSaveTask(taskContent) {
    let valCurTaskList = curTaskList.map((task) => task.toLowerCase());
    if (!taskContent || valCurTaskList.includes(taskContent.toLowerCase())) {
      setErrorTab(true);
      return;
    }
    updateCurTaskList([...curTaskList, taskContent]);
    setAddTask(false);
    setErrorTab(false);
  }

  function handleCancleTask() {
    // updateCurTaskList([...curTaskList, taskContent]);
    setAddTask(false);
    setErrorTab(false);
  }

  function handleDeleteTask(task) {
    updateCurTaskList(() => {
      return curTaskList.filter((curTask) => curTask !== task);
    });
  }

  function handlCloseTab() {
    setErrorTab(false);
  }

  function handleEditTask(index, updatedTask) {
    let valCurTaskList = curTaskList.map((task) => task.toLowerCase());
    if (valCurTaskList.includes(updatedTask.toLowerCase())) {
      setErrorTab(true);
      return;
    }
    const updatedTasks = [...curTaskList];
    updatedTasks[index] = updatedTask;
    updateCurTaskList(updatedTasks);
  }
  return (
    <div className="App">
      <header>
        <h1 className="main-heading">To Do App</h1>
        <Lists
          curTaskList={curTaskList}
          editTask={handleEditTask}
          deleteTask={(task) => handleDeleteTask(task)}
        />
        {addTask ? (
          <AddTask
            cancleTask={handleCancleTask}
            saveTask={(taskContent) => handleSaveTask(taskContent)}
          />
        ) : (
          <Add onAdd={handleAdd} />
        )}
        {errorTab ? <ErrorPopUp closeTab={handlCloseTab} /> : undefined}
      </header>
    </div>
  );
}

export default App;
