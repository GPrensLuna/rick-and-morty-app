import React from "react";
import style from "./model.css";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className={style.modalOverlay}>
      <div className={style.modal}>
        <button className={style.modalClose} onClick={onClose}>
          Cerrar
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
