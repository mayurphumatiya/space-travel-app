import React, { useEffect, useState } from "react";
import "../styles/Destination.css";
// import Dialog from "../components/Dialog";
import { Outlet, useNavigate } from "react-router-dom";
import { getOverlapSelector } from "../Store/Slices/OverlapSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  getDestination,
  saveDestination,
} from "../Store/Slices/DestinationSlice";
import { loadDestinations } from "../Store/Slices/DestinationApi";

const Destination = () => {
  const [toggleTab, setToggleTab] = useState<Number>(0);
  const stopAnimation = useSelector(getOverlapSelector);
  const loggedUser = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const state = useSelector(getDestination);

  const handleTabs = (index: Number) => {
    setToggleTab(index);
  };

  const bookNowClick = (dest: any) => {
    if (loggedUser) {
      console.log(dest);
      dispatch(saveDestination(dest));
      navigate("/checkout");
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    // @ts-ignore
    dispatch(loadDestinations());
  }, [dispatch]); //eslint-disable-line

  return (
    <div className="grid-container grid-container--destination flow">
      <h1 className="numbered-title">
        <span>01</span> Pick your destination
      </h1>

      {state.destinations &&
        state?.destinations?.destination?.map((dest: any, index: any) => (
          <img
            key={dest.id}
            className={`${index !== toggleTab && "hide"} ${
              !stopAnimation.overlap && "animate"
            }`}
            src={dest.image}
            alt={dest.name}
          />
        ))}

      <div className="tab-list underline-indicators flex">
        {state.destinations &&
          state?.destinations?.destination?.map((dest: any, index: any) => (
            <button
              className={`${
                toggleTab === index && "active"
              } uppercase ff-sans-cond text-accent letter-spacing-2`}
              onClick={() => handleTabs(index)}
            >
              {dest.name}
            </button>
          ))}
      </div>
      {state.destinations &&
        state?.destinations?.destination?.map((dest: any, index: any) => (
          <article
            key={dest.id}
            className={`${index !== toggleTab && "hide"} ${
              !stopAnimation.overlap && "anime"
            } destination-info flow`}
          >
            <h2 className="fs-800 uppercase ff-serif">{dest.name}</h2>

            <p>{dest.description}</p>
            <div className="destination-meta flex">
              <div>
                <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
                <p className="ff-serif uppercase">{dest.distance}</p>
              </div>
              <div>
                <h3 className="text-accent fs-200 uppercase">
                  Est. travel time
                </h3>
                <p className="ff-serif uppercase">{dest.travel_time}</p>
              </div>
            </div>
            <button
              className="bookBtn fs-600 uppercase ff-sans-cond letter-spacing-2"
              onClick={() => bookNowClick(dest)}
            >
              book now
            </button>
          </article>
        ))}
      <Outlet />
    </div>
  );
};

export default Destination;
