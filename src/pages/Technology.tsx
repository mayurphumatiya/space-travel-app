import React, { useState } from "react";
import "../styles/Technology.css";
import { data } from "../utils/data";
import { useSelector } from "react-redux";
import { getOverlapSelector } from "../Store/Slices/OverlapSlice";

const Technology = () => {
  const [tab, setTab] = useState<Number>(0);
  const stopAnimation = useSelector(getOverlapSelector);

  const changeTab = (index: Number) => {
    setTab(index);
  };

  return (
    <div className="grid-container grid-container--technology flow">
      <h1 className="numbered-title numbered-title-technology">
        <span>03</span> space launch 101
      </h1>
      <div className="number-indicators ff-serif">
        <button
          className={`${tab === 0 && "active"}`}
          onClick={() => changeTab(0)}
        >
          <span>1</span>
        </button>
        <button
          className={`${tab === 1 && "active"}`}
          onClick={() => changeTab(1)}
        >
          <span>2</span>
        </button>
        <button
          className={`${tab === 2 && "active"}`}
          onClick={() => changeTab(2)}
        >
          <span>3</span>
        </button>
      </div>
      {data &&
        data.technology.map((tech, index) => (
          <>
            <article
              key={index}
              className={`${index !== tab && "hide"} ${
                !stopAnimation.overlap && "animing"
              }  technology-details flow"`}
            >
              <header className="flow flow--space-small">
                <h2 className="fs-500 text-accent ff-sans-cond uppercase letter-spacing-3">
                  the terminology...
                </h2>
                <p className="fs-700 uppercase ff-serif">{tech.name}</p>
              </header>
              <p className="text-accent">{tech.description}</p>
            </article>
            <img
              className={`${index !== tab && "hide"} hidePImg`}
              src={tech.images.landscape}
              alt={tech.name}
            />
            <img
              className={`${index !== tab && "hide"} hideLImg`}
              src={tech.images.portrait}
              alt={tech.name}
            />
          </>
        ))}
    </div>
  );
};

export default Technology;
