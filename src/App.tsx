import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import "./styles/App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import { useState, useEffect } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoutes from "./components/PrivateRoutes";
import Checkout from "./pages/Checkout";
import { useSelector } from "react-redux";
import { getNavbarSelector } from "./Store/Slices/NavbarSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [img, setImg] = useState<string>("");
  const nav = useSelector(getNavbarSelector);

  const location = useLocation();

  const changeBgImage = () => {
    switch (location.pathname) {
      case "/":
        setImg("home");
        break;
      case "/destination":
        setImg("destination");
        break;
      case "/crew":
        setImg("crew");
        break;
      case "/technology":
        setImg("technology");
        break;
      default:
        setImg("app");
        break;
    }
  };

  useEffect(() => {
    changeBgImage();
    console.log(nav);
  }, [location.pathname]); //eslint-disable-line

  return (
    <>
      <div className={img}>
        {nav.show && <Navbar />}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />

          {/* Protected Routes */}
          <Route element={<PrivateRoutes />}>
            <Route path="/destination/:id" element={<Checkout />} />
          </Route>
        </Routes>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          limit={2}
        />
      </div>
    </>
  );
}

export default App;
