import React from 'react';
import Button from './Button'
const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal__main">
        <h5 className="modal__header">Are you a Mountain Knight?</h5>
        <form className="modal__form">
          <input type="email" placeholder="Email" className="modal__input"/>
          <input type="password" placeholder="Password" className="modal__input"/>
          <Button name="Log in"/>
        </form>
      </section>
    </div>
  );
};

export default Modal;