import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import { useState, useEffect } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoutes from "./components/PrivateRoutes";

function App() {
  const [toggleTab, setToggleTab] = useState<Number>(0);
  const [img, setImg] = useState<string>("");
  const [overlap, setOverlap] = useState<Boolean>(false);

  const changeBgImage = () => {
    switch (toggleTab) {
      case 0:
        setImg("home");
        break;
      case 1:
        setImg("destination");
        break;
      case 2:
        setImg("crew");
        break;
      case 3:
        setImg("technology");
        break;
      default:
        setImg("app");
        break;
    }
  };

  useEffect(() => {
    changeBgImage();
  }, [toggleTab]); //eslint-disable-line

  return (
    <>
      <div className={img}>
        <Navbar
          setOverlap={setOverlap}
          toggleTab={toggleTab}
          setToggleTab={setToggleTab}
        />
        <Routes>
          <Route path="/" element={<Homepage setToggleTab={setToggleTab} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/destination"
            element={<Destination overlap={overlap} />}
          />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
          {/* Protected Routes */}
          <Route element={<PrivateRoutes />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
