import React, { useState } from "react";
import { data } from "../utils/data";
import "../styles/Destination.css";
import Dialog from "../components/Dialog";

interface DestinationProps {
  overlap:Boolean,
}

const Destination = (props : DestinationProps) => {
  const [toggleTab, setToggleTab] = useState<Number>(0);
  const [open, setOpen]  = useState<Boolean>(false);

  const handleTabs = (index: Number) => {
    setToggleTab(index);
  };

  const bookNowClick = () =>{
    setOpen(true);
  }

  return (
    <div className="grid-container grid-container--destination flow">
      <h1 className="numbered-title">
        <span>01</span> Pick your destination
      </h1>
    
     { data && data.destinations.map((dest, index)=>(
       <img key={index} className={`${index !== toggleTab && "hide"} ${!props.overlap && "animate"}`} src={dest.images.webp} alt={dest.name} />
     ))}

      <div className="tab-list underline-indicators flex">
        <button
          className={`${toggleTab === 0 && "active"} uppercase ff-sans-cond text-accent letter-spacing-2`}
          onClick={() => handleTabs(0)}
        >
          Moon
        </button>
        <button
          className={`${toggleTab === 1 && "active"} uppercase ff-sans-cond text-accent letter-spacing-2`}
          onClick={() => handleTabs(1)}
        >
          Mars
        </button>
        <button
          className={`${toggleTab === 2 && "active"} uppercase ff-sans-cond text-accent letter-spacing-2`}
          onClick={() => handleTabs(2)}
        >
          Europa
        </button>
        <button
          className={`${toggleTab === 3 && "active"} uppercase ff-sans-cond text-accent letter-spacing-2`}
          onClick={() => handleTabs(3)}
        >
          Titan
        </button>
      </div>
      {data && data.destinations.map((dest, index) => (
        <article key={index} className={`${index !== toggleTab && "hide"} ${!props.overlap && "anime"} destination-info flow`}>
          <h2 className="fs-800 uppercase ff-serif">{dest.name}</h2>

          <p>
           {dest.description}
          </p>
          <div className="destination-meta flex">
            <div>
              <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
              <p className="ff-serif uppercase">{dest.distance}</p>
            </div>
            <div>
              <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
              <p className="ff-serif uppercase">{dest.travel}</p>
            </div>
          </div>
          <button className="bookBtn fs-600 uppercase ff-sans-cond letter-spacing-2" onClick={bookNowClick}>book now</button>
        </article>
      ))}
      {open && <Dialog setOpen={setOpen} />}
    </div>
  );
};

export default Destination;
