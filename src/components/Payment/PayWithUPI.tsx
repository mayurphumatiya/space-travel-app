import "../../styles/Payment.css"

interface PayWithUPIProps {
    setCurrentStep:(val:number) => void;
  }

const PayWithUPI = (props:PayWithUPIProps) => {

    const handleSubmit = (e:React.SyntheticEvent<EventTarget>) =>{
        e.preventDefault();
        try{
            props.setCurrentStep(4);
        }catch(e){
            console.log(e)
        }
    }

  return (
    <>
      <form
        className="upi-form flex fs-500 ff-sans-cond letter-spacing-2"
        onSubmit={handleSubmit}
      >
        <div className="input-div">
        <label>UPI ID:</label>
        <input
          type="upiId"
          name="text"
        />
        <span className="text-accent fs-200 letter-spacing-3">
           Add your Upi Id eg: tonystark@okicici
          </span>
        </div>
        <button type="submit" className="login-btn uppercase text-accent">
         Pay &#8377;160000
        </button>
      </form>
    </>
  );
};

export default PayWithUPI;
