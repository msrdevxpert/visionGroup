"use client";

import { ReactNode } from "react";

type ModalProps = {
  id: string;
  title?: string;
  size?: "sm" | "lg" | "xl";
  children: ReactNode;
};

const Modal = ({ id, title, size = "xl", children }: ModalProps) => {
  return (
    <div
      className="modal fade"
      id={id}
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className={`modal-dialog modal-${size} modal-dialog-centered modal-dialog-scrollable`}>
        <div className="modal-content" style={{padding:"14px"}}>
          
          {title && (
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
          )}

          <div className="modal-body p-4">{children}</div>

        </div>
      </div>
    </div>
  );
};

export default Modal;
