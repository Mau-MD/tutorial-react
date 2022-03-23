const Task = ({
  id,
  name,
  isCompleted,
  description,
  removeTask,
  completeTask,
}) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "1rem 0" }}>
      <div className="card-body">
        <h5 className="card-title">
          <div>{name}</div>
          <span className="badge bg-primary mt-2">
            {isCompleted ? "Completado" : "No ha sido completado"}
          </span>
        </h5>
        <p className="card-text">{description}</p>
        {!isCompleted && (
          <button
            className="btn btn-primary me-3"
            onClick={() => completeTask(id)}
          >
            Completar
          </button>
        )}
        <button className="btn btn-danger" onClick={() => removeTask(id)}>
          Borrar
        </button>
      </div>
    </div>
  );
};

export default Task;
