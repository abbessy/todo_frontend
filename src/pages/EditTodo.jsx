import { useEffect, useState } from "react";
import { fetchTodo, updateTodo } from "../api/todos";
import { showSuccess, showError } from "../components/Toast";
import { useParams, useNavigate } from "react-router-dom";

export default function EditTodo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    fetchTodo(id).then(data => {
      setTitle(data.title);
      setCompleted(data.completed);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateTodo(id, { title, completed });
      showSuccess("Updated!");
      navigate("/");
    } catch {
      showError("Update failed");
    }
  };

  return (
    <div className="container">
      <h1>Edit Todo</h1>
      <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:'10px'}}>
        <input type="text" value={title} onChange={e=>setTitle(e.target.value)} style={{padding:'8px'}}/>
        <label>
          <input type="checkbox" checked={completed} onChange={e=>setCompleted(e.target.checked)} />
          Completed
        </label>
        <button type="submit" style={{padding:'8px', background:'#4caf50', color:'#fff'}}>Update</button>
      </form>
    </div>
  );
}
