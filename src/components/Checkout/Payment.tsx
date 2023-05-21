import "../../styles/Payment.css";
import PayWithCard from "../Payment/PayWithCard";
import PayWithUPI from "../Payment/PayWithUPI";
import TicketDetails from "../Payment/TicketDetails";


const Payment = () => {
  return (
    <>
      <h1 className="main-heading fs-700 uppercase ff-sans-cond letter-spacing-2 text-white">
        Payment
      </h1>
      <div>
        {/* <TicketDetails /> */}
        {/* <PayWithUPI /> */}
        <PayWithCard />
      </div>
    </>
  );
};

export default Payment;
