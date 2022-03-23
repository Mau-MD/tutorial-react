// Imports (Otros componentes, archivos de css, librerias externas, etc.)

import { useState } from "react";
import InputTareas from "./components/InputTareas";
import Tasks from "./components/Tasks";

const initialTasks = [
  {
    id: 1,
    title: "Tarea 1",
    description: "Descripcion de la tarea 1",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Tarea de Mate",
    description: "Descripcion de la tarea de mate",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Tarea de Fisica",
    description: "Descripcion de la tarea de fisica",
    isCompleted: true,
  },
];

// Definicion del componente
const App = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const [showInput, setShowInput] = useState(false);

  const addTask = (title, description) => {
    setTasks([
      ...tasks,
      {
        id: Math.random(),
        title,
        description,
        isCompleted: false,
      },
    ]);
  };

  const removeTask = (idToBeDeleted) => {
    const filteredTasks = tasks.filter((task) => task.id !== idToBeDeleted);

    setTasks(filteredTasks);
  };

  const completeTask = (idToBeCompleted) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === idToBeCompleted) {
        task.isCompleted = true;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const toggleInput = () => {
    if (showInput === true) {
      setShowInput(false);
    } else {
      setShowInput(true);
    }
  };
  // El JSX
  return (
    <div className="container-xl">
      <button className="btn btn-primary" onClick={toggleInput}>
        Toggle Input
      </button>
      {showInput && <InputTareas addTask={addTask} />}
      <Tasks
        tareas={tasks}
        removeTask={removeTask}
        completeTask={completeTask}
      />
    </div>
  );
};

export default App;

// Exportacion del componente
