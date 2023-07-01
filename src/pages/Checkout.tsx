import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import TicketsBooked from "../components/Checkout/TicketsBooked";
import { RingLoader } from "react-spinners";
import { getTickets } from "../Store/Slices/TicketSlice";
import { IoMdArrowRoundBack } from "react-icons/io";

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [back, setBack] = useState(true);
  const [selDest, setSelDest] = useState({});
  const dispatch = useDispatch();
  const { id } = useParams();
  const state = useSelector(getTickets);

  const loadDestinationById = async () => {
    try {
      const response = await axios.get(
        `${ApiRoutes.url.production}${ApiRoutes.api.LOAD_DESTINATIONS}${id}`
      );
      if (response.data.status) {
        setSelDest(response.data.destination);
      } else {
        toast.error(
          "There was a problem loading destination, Please try again later"
        );
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadDestinationById();
    dispatch(showNav(false));
  }, []); //eslint-disable-line

  useEffect(() => {
    if (currentStep === 1 || currentStep === 4) {
      setBack(true);
    }else{
      setBack(false)
    }
  }, [currentStep]);

  const backClick = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <>
      <CheckoutState>
        {state.isLoading ? (
          <RingLoader size={120} color="#36c7d6" loading={state.isLoading} />
        ) : (
          <div>
            <div style={{ paddingBlock: "10px" }}>
              {currentStep !== 4 && (
                <h1 className="main-heading uppercase fs-700 ff-serif letter-spacing-1 text-accent">
                  Checkout
                </h1>
              )}
            </div>
            {!back && (
              <span role="button" onClick={backClick}>
                <IoMdArrowRoundBack
                  fontSize={40}
                  style={{
                    position: "absolute",
                    color: "#d2d8f9",
                    cursor: "pointer",
                  }}
                />
              </span>
            )}

            <div className="checkout-ctn ">
              <div className="middle-container">
                {currentStep !== 4 && <Stepper currentStep={currentStep} />}
                {currentStep === 1 && (
                  <CustomerInfo
                    setCurrentStep={setCurrentStep}
                    selDest={selDest}
                  />
                )}
                {currentStep === 2 && (
                  <ContactInfo setCurrentStep={setCurrentStep} />
                )}
                {currentStep === 3 && (
                  <Payment setCurrentStep={setCurrentStep} />
                )}
                {currentStep === 4 && state.status && <TicketsBooked />}
              </div>
            </div>
          </div>
        )}
      </CheckoutState>
    </>
  );
};

export default Checkout;
