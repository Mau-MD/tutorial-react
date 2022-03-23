import Task from "./Task";

const Tasks = ({ tareas, removeTask, completeTask }) => {
  return (
    <div>
      {tareas.map((task) => {
        return (
          <Task
            name={task.title}
            id={task.id}
            isCompleted={task.isCompleted}
            description={task.description}
            removeTask={removeTask}
            completeTask={completeTask}
          />
        );
      })}
    </div>
  );
};

export default Tasks;
