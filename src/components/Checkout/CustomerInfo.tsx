import { useContext, useState } from "react";
import "../../styles/CustomerInfo.css";
import { checkoutContext } from "../../context/CheckoutContext";

interface CustomerInfoProps {
  setCurrentStep:(val:number) => void;
  selDest:any;
}

const CustomerInfo = (props : CustomerInfoProps) => {
  const [price, setPrice] = useState<number>(props.selDest.ticket_price);

  const ctx = useContext(checkoutContext)
  
  const handleChange =(e:React.ChangeEvent<HTMLSelectElement>) =>{
    setPrice(props.selDest.ticket_price * Number(e.target.value));
  }

  const confirmDetails = (e:React.SyntheticEvent<EventTarget>) =>{
    e.preventDefault();
    try{
      props.setCurrentStep(2);
      console.log(ctx);
    }catch(e){
      console.log(e);
    }
  }

  return (
    <>
      <h1 className="main-heading uppercase">Customer Info</h1>
      <div className="customer-container">
        <div className="single-data uppercase">
          <label>Name</label>
          <span>Mayur Phumatiya</span>
        </div>
          <div className="single-data uppercase">
            <label>Tickets</label>
            <span>
              <select name="tickets" onChange={handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </span>
          </div>
          <div className="single-data uppercase">
            <label>Destination</label>
            <span>{props.selDest.name}</span>
          </div>
          <div className="single-data uppercase">
            <label>Est. travel time </label>
            <span>{props.selDest.travel_time}</span>
          </div>
          <div className="single-data uppercase">
            <label>Avg Dist</label>
            <span>{props.selDest.distance}</span>
          </div>
          <div className="single-data uppercase">
            <label>Price</label>
            <span style={{ color: "#B2A4FF" }}>  &#8377;{price}</span>
          </div>
          <div className="btn-div flex">
          <button className="cancel-btn uppercase">Cancel</button>
          <button className="next-btn uppercase" onClick={confirmDetails}>Confirm</button>
          </div>
      </div>
    </>
  );
};

export default CustomerInfo;
