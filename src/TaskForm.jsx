import { useState } from "react";

function TaskForm({createTask}) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // cancela el comportamiento por defecto del formulario
    const newTask = {
      id: 5,
      title,
      description: "lorem ipsum dolor sit amet"
    };
    createTask(newTask);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
