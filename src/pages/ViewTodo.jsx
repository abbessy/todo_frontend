import { useEffect, useState } from "react";
import { fetchTodo } from "../api/todos";
import { useParams } from "react-router-dom";

export default function ViewTodo() {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetchTodo(id).then(setTodo);
  }, [id]);

  if(!todo) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1>{todo.title}</h1>
      <p>Status: {todo.completed ? "Completed ✅" : "Pending ❌"}</p>
      <p>Created: {new Date(todo.createdAt).toLocaleString()}</p>
      <p>Updated: {new Date(todo.updatedAt).toLocaleString()}</p>
    </div>
  );
}
