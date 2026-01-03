import { useEffect, useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(setTodos);
  }, []);

  const addTodo = async () => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    setTodos([...todos, await res.json()]);
    setTitle("");
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(t => <li key={t._id}>{t.title}</li>)}
      </ul>
    </div>
  );
}

export default App;
