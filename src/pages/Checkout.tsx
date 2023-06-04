import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { showNav } from "../Store/Slices/NavbarSlice";
import "../styles/Checkout.css";
import Stepper from "../components/Stepper";
import CustomerInfo from "../components/Checkout/CustomerInfo";
import ContactInfo from "../components/Checkout/ContactInfo";
import Payment from "../components/Checkout/Payment";
import CheckoutState from "../context/CheckoutContext";
import axios from "axios";
import ApiRoutes from "../utils/ApiRoutes.json";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selDest, setSelDest] = useState({});
  const dispatch = useDispatch();
  const { id } = useParams();

  const loadDestinationById = async () => {
    try {
      const response = await axios.get(
        `${ApiRoutes.url.local}${ApiRoutes.api.LOAD_DESTINATIONS}${id}`
      );
      if (response.data.status) {
        setSelDest(response.data.destination);
      } else {
        toast.error("There was a problem loading destination, Please try again later")
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadDestinationById();
    dispatch(showNav(false));
  }, []); //eslint-disable-line

  return (
    <>
      <CheckoutState>
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
                <CustomerInfo setCurrentStep={setCurrentStep} selDest={selDest} />
              )}
              {currentStep === 2 && (
                <ContactInfo setCurrentStep={setCurrentStep} />
              )}
              {currentStep === 3 && <Payment setCurrentStep={setCurrentStep} />}
            </div>
          </div>
        </div>
      </CheckoutState>
    </>
  );
};

export default Checkout;
