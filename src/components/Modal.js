import React from 'react';
import Button from './Button'
const Modal = ({ show, children, showMsg }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal__main">
        <h5 className="modal__header">Are you a Mountain Knight?</h5>
        {children}
      </section>
    </div>
  );
};

export default Modal;