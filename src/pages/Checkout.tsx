import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNavbarSelector, showNav } from "../Store/Slices/NavbarSlice";

const Checkout = () => {
  const nav = useSelector(getNavbarSelector)

    const dispatch = useDispatch()
  useEffect(() => {
    dispatch(showNav(false));
    console.log(nav)
  }, []);

  return (
    <>
      <div></div>
    </>
  );
};

export default Checkout;
