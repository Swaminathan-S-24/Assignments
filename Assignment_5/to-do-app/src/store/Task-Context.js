import { useReducer, createContext } from "react";

export const TaskContext = createContext({
  tasks: [],
  addTaskFlag: true,
  addTasks: () => {},
  editTasks: () => {},
  deleteTasks: () => {},
  updateTasks: () => {},
  addTaskBtn: () => {},
  editTasksFlag: () => {},
});
function tasksReducer(state, action) {
  switch (action.type) {
    case "ADDBTN":
      console.log(state);
      return {
        addTaskFlag: action.payLoad.flag,
      };
    case "ADD":
      const updatedTasksAdd = [...state.tasks];
      updatedTasksAdd.push({
        // id: action.payLoad.id,
        id: Math.round(Math.random() * 1000).toString(),
        name: action.payLoad.name,
        isChecked: false,
      });
      return {
        tasks: updatedTasksAdd,
        addTaskFlag: false,
      };
    case "EDIT":
      console.log(action.payLoad);
      const updatedTasksEdit = [...state.tasks];
      const existingTaskIndexEdit = updatedTasksEdit.findIndex(
        (task) => task.id === action.payLoad.id
      );
      updatedTasksEdit[existingTaskIndexEdit].name = action.payLoad.name;
      updatedTasksEdit[existingTaskIndexEdit].isEdit = action.payLoad.flag;
      return {
        tasks: updatedTasksEdit,
      };

    case "EDITFLAG":
      const updatedTasksEditFlag = [...state.tasks];
      const existingTaskIndexEditFlag = updatedTasksEditFlag.findIndex(
        (task) => task.id === action.payLoad.id
      );
      updatedTasksEditFlag[existingTaskIndexEditFlag].isEdit =
        action.payLoad.flag;
      return {
        tasks: updatedTasksEditFlag,
      };
    case "DELETE":
      const updatedTasksDelete = [...state.tasks];
      const existingTaskIndexDelete = updatedTasksDelete.findIndex(
        (task) => task.id === action.payLoad.id
      );
      updatedTasksDelete.splice(existingTaskIndexDelete, 1);
      return {
        tasks: updatedTasksDelete,
      };
    case "STATUS":
      const updatedTaskStatus = [...state.tasks];
      const existingTaskIndexStatus = updatedTaskStatus.findIndex(
        (task) => task.id === action.payLoad.id
      );
      updatedTaskStatus[existingTaskIndexStatus].isChecked =
        action.payLoad.isChecked;
      // !action.payLoad.isChecked;
      return {
        tasks: updatedTaskStatus,
      };
    default:
      return state;
  }
}
export default function TaskContextProvider({ children }) {
  const [tasksState, tasksDispatch] = useReducer(tasksReducer, {
    addTaskFlag: true,
    tasks: [],
  });

  const ctxValue = {
    tasks: tasksState.tasks,
    addTaskFlag: tasksState.addTaskFlag,
    addTaskBtn: (flag) => {
      tasksDispatch({
        type: "ADDBTN",
        payLoad: {
          flag,
        },
      });
    },
    addTasks: (name) => {
      tasksDispatch({
        type: "ADD",
        payLoad: {
          name,
        },
      });
    },
    editTasksFlag: (id, flag) => {
      tasksDispatch({
        type: "EDITFLAG",
        payLoad: {
          id,
          flag,
        },
      });
    },
    editTasks: (id, name, flag) => {
      tasksDispatch({
        type: "EDIT",
        payLoad: {
          id,
          name,
          flag,
        },
      });
    },
    deleteTasks: (id) => {
      tasksDispatch({
        type: "DELETE",
        payLoad: {
          id,
        },
      });
    },
    updateTasks: (id, isChecked) => {
      tasksDispatch({
        type: "STATUS",
        payLoad: {
          id,
          isChecked,
        },
      });
    },
  };

  return (
    <TaskContext.Provider value={ctxValue}>{children}</TaskContext.Provider>
  );
}
