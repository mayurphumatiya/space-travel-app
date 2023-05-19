import "../styles/CustomerInfo.css"
import Stepper from "./Stepper"

const CustomerInfo = () => {
  return (
    <>
        <h2 className='main-heading'>Customer Info</h2>
        <div className="customer-container">
            <div className='single-data uppercase'>
                <label>Name</label>
                <span>Mayur Phumatiya</span>
            </div>
            <div className='single-data uppercase'>
                <label>Tickets</label>
                <span>
                <select name="tickets">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                </span>
            </div>
            <div className='single-data uppercase'>
                <label>Destination</label>
                <span>Moon</span>
            </div>
            <div className='single-data uppercase'>
                <label>Est. travel time </label>
                <span>260000</span>
            </div>
            <div className='single-data uppercase'>
                <label>Avg Dist</label>
                <span>260000km</span>
            </div>
        </div>
    </>
  )
}

export default CustomerInfo