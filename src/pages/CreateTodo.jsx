import { useState } from "react";
import { createTodo } from "../api/todos";
import { showSuccess, showError } from "../components/Toast";

export default function CreateTodo() {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTodo({ title });
      showSuccess("Todo created!");
      setTitle("");
    } catch {
      showError("Creation failed");
    }
  };

  return (
    <div className="container">
      <h1>Create Todo</h1>
      <form onSubmit={handleSubmit} style={{display:'flex', gap:'10px'}}>
        <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} style={{flex:1, padding:'8px'}}/>
        <button style={{padding:'8px 12px', background:'#4caf50', color:'#fff'}}>Create</button>
      </form>
    </div>
  );
}
