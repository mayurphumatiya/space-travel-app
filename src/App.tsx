import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import "./styles/App.css";
import { createRoutesFromElements } from "react-router";
import {
  createBrowserRouter,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import { useState, useEffect } from "react";

function App() {
const [toggleTab, setToggleTab] = useState<Number>(0);
const [img, setImg] = useState<string>("");

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root toggleTab={toggleTab} setToggleTab={setToggleTab}/>}>
        <Route index element={<Homepage setToggleTab={setToggleTab} />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Route>
    )
  );

  const changeBgImage =()=>{
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
  }
}

  useEffect(()=>{
    changeBgImage();
  },[toggleTab])  //eslint-disable-line

  return (
    <>
    <div className={img}>
      <RouterProvider router={router} />
    </div>
    </>
  );
}

interface RootProps {
  toggleTab: Number,
  setToggleTab: React.Dispatch<React.SetStateAction<Number>>,
}

const Root = (props: RootProps) => {
  
  return (
    <>
      <Navbar toggleTab={props.toggleTab} setToggleTab={props.setToggleTab} />
      <Outlet />
    </>
  );
};

export default App;
