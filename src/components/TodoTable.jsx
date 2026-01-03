import { useState } from "react";
import { Edit, Trash2 } from "lucide-react";
import Modal from "./Modal";
import { deleteTodo } from "../api/todos";
import { showSuccess, showError } from "./Toast";

export default function TodoTable({ todos, onRefresh, onEdit }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      showSuccess("Deleted successfully!");
      onRefresh();
      setModalOpen(false);
    } catch {
      showError("Delete failed");
    }
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo._id}>
              <td>{todo.title}</td>
              <td>{todo.completed ? "Yes" : "No"}</td>
              <td className="actions">
                <button onClick={() => onEdit(todo)}><Edit size={16} /></button>
                <button onClick={() => { setSelected(todo); setModalOpen(true); }}><Trash2 size={16} /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selected && (
        <Modal isOpen={modalOpen} setIsOpen={setModalOpen} title="Confirm Delete">
          <p>Are you sure you want to delete "{selected.title}"?</p>
          <div style={{display:'flex', justifyContent:'flex-end', gap:'10px', marginTop:'10px'}}>
            <button onClick={() => setModalOpen(false)}>Cancel</button>
            <button onClick={() => handleDelete(selected._id)} style={{background:'#f44336', color:'#fff', padding:'5px 10px', borderRadius:'4px'}}>Delete</button>
          </div>
        </Modal>
      )}
    </>
  );
}
