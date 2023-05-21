import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { showNav } from "../Store/Slices/NavbarSlice";
import "../styles/Checkout.css";
import Stepper from "../components/Stepper";
import CustomerInfo from "../components/Checkout/CustomerInfo";
import ContactInfo from "../components/Checkout/ContactInfo";
import Payment from "../components/Checkout/Payment";

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showNav(false));
  }, []); //eslint-disable-line

  return (
    <>
      <div>
        <div>
          <h1 className="main-heading uppercase fs-700 ff-serif letter-spacing-1 text-accent">
            Checkout
          </h1>
        </div>
        <div className="checkout-ctn ">
          <div className="middle-container">
            <Stepper currentStep={currentStep} />
            {currentStep === 1 && (
              <CustomerInfo setCurrentStep={setCurrentStep} />
            )}
            {currentStep === 2 && (
              <ContactInfo setCurrentStep={setCurrentStep} />
            )}
            {currentStep === 3 && <Payment setCurrentStep={setCurrentStep} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
