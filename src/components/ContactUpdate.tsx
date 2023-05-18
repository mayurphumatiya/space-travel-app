import "../styles/ContactUpdate.css";

const ContactUpdate = () => {
  return (
    <div className="middle-container">
      <h1 className="main-heading fs-700 uppercase ff-sans-cond letter-spacing-2 text-white">
        Contact Details
      </h1>
      <form className="contact-form flex fs-500 ff-sans-cond letter-spacing-2">
        <div className="input-div">
          <label className="uppercase">Email Id:</label>
          <input type="email" name="email" />
          <span className="text-accent fs-200 letter-spacing-3">
            Your E-mail will only be used for sending ticket(s)
          </span>
        </div>
        <button type="submit" className="login-btn uppercase text-accent">
          Update details
        </button>
      </form>
    </div>
  );
};

export default ContactUpdate;
