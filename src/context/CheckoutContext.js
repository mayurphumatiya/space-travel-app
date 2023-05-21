import { createContext, useState } from "react";

export const checkoutContext = createContext();

const CheckoutState = (props)=>{
    const [checkout, setCheckout] = useState({
        "destination":"",
        "tickets":null,
        "price":80,
        "totalPrice":null,
    })

    return(
        <>
        <checkoutContext.Provider value={{checkout, setCheckout}}>
            {props.children}
        </checkoutContext.Provider>
        </>
    )
}

export default CheckoutState;