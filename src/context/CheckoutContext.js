import { createContext, useState } from "react";

export const checkoutContext = createContext();

const CheckoutState = (props)=>{
    const [checkout, setCheckout] = useState({
        "destination":"",
        "tickets":null,
        "price":800000,
        "totalPrice":null,
        "travel":"",
        "distance":""
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