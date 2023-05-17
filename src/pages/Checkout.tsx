import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showNav } from "../Store/Slices/NavbarSlice";

const Checkout = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(showNav(false));
  }, []); //eslint-disable-line

  return (
    <>
      <div>
        <h1 className="uppercase fs-700 ff-serif letter-spacing-1 text-accent">Checkout</h1>
        <form>
            <div>
            <label>First Name:</label>
            <input type="text" name="first_name" />
            </div>
            
            <div>
            <label>Last Name:</label>
            <input type="text" name="first_name" />
            </div>
            
            <div>
            <label>Email Id:</label>
            <input type="text" name="first_name" />
            </div>

            
        </form>
      </div>
    </>
  );
};

export default Checkout;
