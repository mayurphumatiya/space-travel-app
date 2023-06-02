import "../../styles/Payment.css";
import { useContext } from "react";
import { AiFillCreditCard } from "react-icons/ai";
import { SiPaytm } from "react-icons/si";
import { checkoutContext } from "../../context/CheckoutContext";

interface TicketsDetailsProps {
  setPay: (val: string) => void;
}

const TicketDetails = (props: TicketsDetailsProps) => {
  const ctx = useContext(checkoutContext);

  const totalUPIPrice = () => {
    props.setPay("UPI");
    ctx.setCheckout({
      ...ctx.checkout,
      total_price: ctx.checkout.price + 5000,
    });
  };

  const totalCARDPrice = () => {
    props.setPay("CARD");
    ctx.setCheckout({
      ...ctx.checkout,
      total_price: ctx.checkout.price + 5000,
    });
  };

  return (
    <div>
      <h2 className="ticket-details letter-spacing-1 uppercase">
        Ticket details
      </h2>
      <div className="tickets-container">
        <div className="single-data uppercase">
          <label>Tickets Price</label>
          <span> &#8377;{ctx.checkout.price}</span>
        </div>
        <div className="single-data uppercase">
          <label>Convenience Fees</label>
          <span> &#8377;5000</span>
        </div>
        <div className="single-data uppercase">
          <label>Total </label>
          <span style={{ color: "#B2A4FF" }}>
            &#8377;{ctx.checkout.price + 5000}
          </span>
        </div>
        <button className="next-btn uppercase" onClick={totalUPIPrice}>
          Pay with Upi
          <img
            width="28"
            height="28"
            src="https://img.icons8.com/fluency/48/bhim.png"
            alt="bhim"
          />
          <SiPaytm style={{ marginLeft: "1rem" }} size={34} />
        </button>
        <button onClick={totalCARDPrice} className="next-btn uppercase">
          Pay with Debit/Credit Card{" "}
          <AiFillCreditCard style={{ marginLeft: ".5rem" }} size={24} />
        </button>
      </div>
    </div>
  );
};

export default TicketDetails;
