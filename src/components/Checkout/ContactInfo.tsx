import "../../styles/ContactInfo.css"

interface ContactInfoProps {
  setCurrentStep:(val:number) => void;
}

const ContactInfo = (props:ContactInfoProps) => {


  const handleSubmit =(e:React.SyntheticEvent<EventTarget>)=>{
    e.preventDefault();
    try{
      props.setCurrentStep(3);
    }catch(e){
      console.log(e)
    }
  }

  return (
    <>
      <h1 className="main-heading fs-700 uppercase ff-sans-cond letter-spacing-2 text-white">
        Contact Details
      </h1>
      <form onSubmit={handleSubmit} className="contact-form flex fs-500 ff-sans-cond letter-spacing-2">
        <div className="input-div">
          <label className="uppercase">Email Id:</label>
          <input type="email" name="email"  required/>
          <span className="text-accent fs-200 letter-spacing-3">
            Your E-mail will only be used for sending ticket(s)
          </span>
        </div>
        <button type="submit" className="login-btn uppercase text-accent">
          Update details
        </button>
      </form>
      </>
  );
};

export default ContactInfo;
