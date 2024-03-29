import React, { useContext, useState } from "react";
import { checkoutContext } from "../../context/CheckoutContext";
import visa from "../../assets/shared/icons8-visa-48.png";
import mastercard from "../../assets/shared/icons8-mastercard-48.png";
import cvv from "../../assets/shared/icons8-card-48.png";
import { bookingTickets } from "../../Store/Slices/TicketsAPIs";
import { useDispatch } from "react-redux";

interface PayWithCardProps {
  setCurrentStep: (val: number) => void;
}

const PayWithCard = (props: PayWithCardProps) => {
  const [card, setCard] = useState<string>("");
  const dispatch = useDispatch();
  const ctx = useContext(checkoutContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCard(e.target.value);
    ctx.setCheckout({
      ...ctx.checkout,
      paymentMethod: "CARD",
      cardNo: e.target.value,
    });
  };

  const handleSubmit = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    props.setCurrentStep(4);
    // @ts-ignore
    dispatch(bookingTickets(ctx.checkout));
  };

  return (
    <>
      <form
        className="flex fs-500 ff-sans-cond letter-spacing-2 uppercase"
        style={{ flexDirection: "column", paddingInline: "1rem" }}
        onSubmit={handleSubmit}
      >
        <div className="input-div">
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <label>Card Number:</label>
            <img src={visa} alt="visa" />
            <img src={mastercard} alt="mastercard" />
          </div>
          <input
            type="text"
            name="card_number"
            value={card}
            onChange={handleChange}
            maxLength={20}
            required
          />
        </div>
        <div className="input-div">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <label>Card CVV:</label>
            <img src={cvv} alt="cvv" />
          </div>
          <input
            style={{ width: "20%", paddingLeft: "10px" }}
            type="text"
            name="card_number"
            maxLength={3}
            required
          />
        </div>
        <button type="submit" className="login-btn uppercase text-accent">
          Pay &#8377;{ctx.checkout.total_price}
        </button>
      </form>
    </>
  );
};

export default PayWithCard;
