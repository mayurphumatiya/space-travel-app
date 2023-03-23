import React from "react";
import crew from "../assets/crew/image-douglas-hurley.png";

const Crew = () => {
  return (
    <div className="grid-container grid-container--crew flow">
      <h1 className="numbered-title">
        <span>02</span> Meet your crew
      </h1>
      <div className="dot-indicators flex">
        <button>
          <span className="sr-only">The commander</span>
        </button>
        <button>
          <span className="sr-only">The mission specialist</span>
        </button>
        <button>
          <span className="sr-only">The pilot</span>
        </button>
        <button>
          <span className="sr-only">The crew engineer</span>
        </button>
      </div>
      <article className="crew-details">
        <h2 className="fs-600 ff-serif uppercase">Commander</h2>
        <p className="fs-700 uppercase ff-serif">Douglas Hurley</p>

        <p>
          Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2.
        </p>
      </article>
      <img src={crew} alt="Douglas Hurley" />
    </div>
  );
};

export default Crew;
