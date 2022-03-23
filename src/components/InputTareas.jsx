import { useState } from "react";
const InputTareas = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    addTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="mt-5">
      <div className="mb-3">
        <label className="form-label">Titulo</label>
        <input
          className="form-control"
          onChange={handleTitleChange}
          value={title}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Descripcion</label>
        <textarea
          className="form-control"
          rows="3"
          onChange={handleDescriptionChange}
          value={description}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default InputTareas;
