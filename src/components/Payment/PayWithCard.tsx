import React from "react";

const PayWithCard = () => {
  return (
    <>
      <form
        className="flex fs-500 ff-sans-cond letter-spacing-2 uppercase"
        style={{ flexDirection: "column", paddingInline: "1rem" }}
      >
        <div className="input-div">
          <label>Card Number:</label>
          <input type="number" name="card_number" />
        </div>
        <div className="input-div" style={{ width: "20%" }}>
          <label>Card CVV:</label>
          <input type="number" name="card_number" />
        </div>
        <button type="submit" className="login-btn uppercase text-accent">
          Pay &#8377;160000
        </button>
      </form>
    </>
  );
};

export default PayWithCard;
