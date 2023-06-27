import { useContext, useState, useEffect } from "react";
import { checkoutContext } from "../../context/CheckoutContext";
import "../../styles/Payment.css";
import { useDispatch, useSelector } from "react-redux";
import { bookingTickets } from "../../Store/Slices/TicketsAPIs";
import { getTickets } from "../../Store/Slices/TicketSlice";

interface PayWithUPIProps {
  setCurrentStep: (val: number) => void;
}

const PayWithUPI = (props: PayWithUPIProps) => {
  const [UPI, setUPI] = useState<string>("");
  const ctx = useContext(checkoutContext);
  const dispatch = useDispatch();
  const state = useSelector(getTickets);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUPI(e.target.value);
    ctx.setCheckout({
      ...ctx.checkout,
      paymentMethod: "UPI",
      upiId: e.target.value,
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
        className="upi-form flex fs-500 ff-sans-cond letter-spacing-2"
        onSubmit={handleSubmit}
      >
        <div className="input-div">
          <label>UPI ID:</label>
          <input
            type="text"
            name="text"
            value={UPI}
            onChange={handleChange}
            required
          />
          <span className="text-accent fs-200 letter-spacing-3">
            Add your UPI ID eg: "tonystark@okicici"
          </span>
        </div>
        <button type="submit" className="login-btn uppercase text-accent">
          Pay &#8377;{ctx.checkout.total_price}
        </button>
      </form>
    </>
  );
};

export default PayWithUPI;
