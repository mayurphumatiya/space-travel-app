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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Homepage />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Route>
    )
  );

  return (
    <>
    <div className="destination">
      <RouterProvider router={router} />
    </div>
    </>
  );
}

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
