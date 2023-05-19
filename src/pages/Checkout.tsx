import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showNav } from "../Store/Slices/NavbarSlice";
import "../styles/Checkout.css";
import ContactUpdate from "../components/ContactUpdate";
import Stepper from "../components/Stepper";

const Checkout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showNav(false));
  }, []); //eslint-disable-line

  return (
    <>
      <div className="container">
        <div>
          <h1 className="main-heading uppercase fs-700 ff-serif letter-spacing-1 text-accent">
            Checkout
          </h1>
        </div>
        <Stepper />
        <ContactUpdate />
      </div>
    </>
  );
};

export default Checkout;
