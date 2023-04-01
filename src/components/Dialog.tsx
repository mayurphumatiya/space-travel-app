import React from "react";
import "../styles/Dialog.css";

interface DialogProps {
  setOpen: React.Dispatch<React.SetStateAction<Boolean>>;
}

const Dialog = (props: DialogProps) => {
  const handleClose = () => {
    props.setOpen(false);
  };
  return (
    <div className="dialog container">
      <h1 className="uppercase fs-700 ff-serif letter-spacing-1 text-accent">
        Login
      </h1>
      <form className="flex fs-500 ff-sans-cond letter-spacing-2">
        <label>Email:</label>
        <input type="email" />
        <label>Password:</label>
        <input type="password" />
      </form>
        <button className="login-btn text-accent" type="submit" onClick={handleClose}>
          Login
        </button>
    </div>
  );
};

export default Dialog;
