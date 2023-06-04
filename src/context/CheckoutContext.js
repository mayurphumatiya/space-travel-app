import { createContext, useState } from "react";

export const checkoutContext = createContext();

const CheckoutState = (props) => {
  const [checkout, setCheckout] = useState({
    full_name: "",
    destination: "",
    tickets: null,
    price: null,
    total_price: null,
    travel: "",
    distance: "",
    image: "",
    email:""
  });

  return (
    <>
      <checkoutContext.Provider value={{ checkout, setCheckout }}>
        {props.children}
      </checkoutContext.Provider>
    </>
  );
};

export default CheckoutState;
