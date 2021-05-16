import React from "react";
import "../cssFiles/Modal.css";

const ModalComponent = ({
  showModal,
  modalBody,
  onCloseHandler,
  title,
  dNoneClose,

}) => {
  const handleClose = onCloseHandler || null;

  return (
    <div
      className={`modal fade  ${showModal ? "show" : ""}`}
      style={showModal ? { display: "block" } : { display: "none" }}
    >
      <div className="overlay" onClick={handleClose}></div>
      <div
        className={`modal-dialog modal-dialog-centered`}
        role="document"
      >
        <div className="modal-content modal-scroll ">
          <div className="modal-header h-auto">
            <h4>{title}</h4>
            <button type="button"
              onClick={handleClose}
              className={`close ${dNoneClose ? "d-none" : ""}`}
              aria-label="Close">
              <span aria-hidden="true">
                &times;
                </span>
            </button>
          </div>
          <div className="modal-body">
            <React.Fragment>{modalBody}</React.Fragment>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
