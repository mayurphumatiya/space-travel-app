import "../../styles/Payment.css";
import PayWithCard from "../Payment/PayWithCard";
import PayWithUPI from "../Payment/PayWithUPI";
import TicketDetails from "../Payment/TicketDetails";
import {useState} from "react"

interface PaymentProps {
    setCurrentStep:(val:number) => void;
  }

const Payment = (props:PaymentProps) => {
    const [pay, setPay] = useState<string>("")
  return (
    <>
      <h1 className="main-heading fs-700 uppercase ff-sans-cond letter-spacing-2 text-white">
        Payment
      </h1>
      <div>
       {!pay && <TicketDetails setPay={setPay} />}
        {pay === "UPI" && <PayWithUPI setCurrentStep={props.setCurrentStep} />}
        {pay === "CARD" && <PayWithCard setCurrentStep={props.setCurrentStep} />}
      </div>
    </>
  );
};

export default Payment;
