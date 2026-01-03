import { useEffect, useState } from "react";
import { fetchTodos } from "../api/todos";
import TodoTable from "../components/TodoTable";
import Toast from "../components/Toast";
import { useNavigate } from "react-router-dom";

export default function TodosList() {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  const loadTodos = async () => {
    const data = await fetchTodos();
    setTodos(data);
  };

  const handleEdit = (todo) => {
    navigate(`/edit/${todo.id}`);
  };

  useEffect(() => { loadTodos(); }, []);

  return (
    <div className="container">
      <h1>Todos List</h1>
      <TodoTable todos={todos} onRefresh={loadTodos} onEdit={handleEdit}/>
      <Toast />
    </div>
  );
}
