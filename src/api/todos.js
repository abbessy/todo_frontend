const API_URL = process.env.REACT_APP_API_URL;

export const fetchTodos = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const createTodo = async (todo) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });

  const data = await res.json();

  if (res.ok && typeof window !== "undefined") {
    window.location.replace("/");
  }

  return data;
};

export const updateTodo = async (id, todo) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });

  const data = await res.json();

  if (res.ok && typeof window !== "undefined") {
    window.location.replace("/");
  }

  return data;
};

export const deleteTodo = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  return res.json();
};

export const fetchTodo = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
};
