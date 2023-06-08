const Modal = ({ isOpen, onClose, children }) => {
  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          {children}
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default Modal;
