export default function Modal({ isOpen, setIsOpen, title, children }) {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={() => setIsOpen(false)}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
}
