import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Homepage.css";

const Homepage = () => {
  const navigate = useNavigate();

  const exploreClick = () =>{
    navigate("/destination")
  }

  return (
    <div className="grid-container grid-container--home">
      <div>
        <h1 className="text-accent fs-500 ff-sans-cond uppercase ">
          So, you want to travel to
          <span className="d-block fs-900 ff-serif text-white">Space</span>
        </h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div>
          <button
            onClick={exploreClick}
            className="large-button uppercase ff-serif fs-600 text-dark bg-white"
          >
            Explore
          </button>
      </div>
    </div>
  );
};

export default Homepage;
