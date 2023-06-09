import { useContext, useState } from "react";
import "../../styles/CustomerInfo.css";
import { checkoutContext } from "../../context/CheckoutContext";

interface CustomerInfoProps {
  setCurrentStep:(val:number) => void;
}

const CustomerInfo = (props : CustomerInfoProps) => {
  const [price, setPrice] = useState<number>(80000);

  const ctx = useContext(checkoutContext)
  
  const handleChange =(e:React.ChangeEvent<HTMLSelectElement>) =>{
    setPrice(80000 * Number(e.target.value));
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
            <span>Moon</span>
          </div>
          <div className="single-data uppercase">
            <label>Est. travel time </label>
            <span>260000</span>
          </div>
          <div className="single-data uppercase">
            <label>Avg Dist</label>
            <span>260000km</span>
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
