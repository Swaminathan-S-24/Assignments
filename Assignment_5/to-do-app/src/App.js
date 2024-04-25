import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import TaskContextProvider from "./store/Task-Context";
import Button from "./UI_Elements/Button";
import AddTask from "./components/AddTask";
import { TaskContext } from "./store/Task-Context";
import { useContext } from "react";

function App() {
  const taskContext = useContext(TaskContext);
  const [addTask, setAddTask] = useState(false);
  function handleAdd() {
    setAddTask(!addTask);
  }
  return (
    <TaskContextProvider>
      <Header />
      <Tasks />
      {addTask ? (
        <AddTask onAdd={handleAdd} onCancle={handleAdd} />
      ) : (
        <Button onClick={handleAdd}>Add Task</Button>
      )}
    </TaskContextProvider>
  );
}

export default App;
