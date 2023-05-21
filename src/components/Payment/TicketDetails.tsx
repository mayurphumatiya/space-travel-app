import "../../styles/Payment.css"
import { AiFillCreditCard } from "react-icons/ai";
import { SiPaytm } from "react-icons/si";

const TicketDetails = () => {
  return (
    <div>
    <h2 className="ticket-details letter-spacing-1 uppercase">
      Ticket details
    </h2>
    <div className="tickets-container">
      <div className="single-data uppercase">
        <label>Tickets Price</label>
        <span> &#8377;80000</span>
      </div>
      <div className="single-data uppercase">
        <label>Convenience Fees</label>
        <span> &#8377;80000</span>
      </div>
      <div className="single-data uppercase">
        <label>Total </label>
        <span style={{color:"#B2A4FF"}}>&#8377;{80000 + 80000}</span>
      </div>
      <button className="next-btn uppercase">
        Pay with Upi <SiPaytm style={{marginLeft:"1rem"}} size={34} />
      </button>
      <button className="next-btn uppercase">
        Pay with Debit/Credit Card <AiFillCreditCard style={{marginLeft:".5rem"}} size={24} />
      </button>
    </div>
  </div>
  )
}

export default TicketDetails