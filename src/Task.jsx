<<<<<<< HEAD
import "./task.css";

export function TaskCard({ready = true}) {
  return (
    <div className="card">
      <h1>Mi pimera tarea</h1>
      <span style={ready?{background: "#195c0d"} : {background: "red"}}>{ready ? "Tarea Realizada" : "Tarea Pendiente"}</span>
    </div>
  );
}
=======
import "./task.css";

export function TaskCard({ready = true}) {
  return (
    <div className="card">
      <h1>Mi pimera tarea</h1>
      <span style={ready?{background: "#195c0d"} : {background: "red"}}>{ready ? "Tarea Realizada" : "Tarea Pendiente"}</span>
    </div>
  );
}
>>>>>>> 01145ed62d9dd39019c948365c11496ed438d2c2
