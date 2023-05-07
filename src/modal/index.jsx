import { createPortal } from "react-dom";
import './index.css'

const modal = document.getElementById("modal");

function Modal({ children }) {
  return (
    <>
      {createPortal(<div className="ModalBackground">{children}</div>, modal)}
    </>
  );
}

export { Modal };
