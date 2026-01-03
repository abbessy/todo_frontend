import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateTodo from "./pages/CreateTodo";
import TodosList from "./pages/TodosList";
import EditTodo from "./pages/EditTodo";
import ViewTodo from "./pages/ViewTodo";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>

        <Route path="/" element={<TodosList />} />
        <Route path="/create" element={<CreateTodo />} />
        <Route path="/edit/:id" element={<EditTodo />} />
        <Route path="/view/:id" element={<ViewTodo />} />
      </Routes>
    </Router>
    </>
  );
}
