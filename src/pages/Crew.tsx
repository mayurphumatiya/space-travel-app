import React,{useState} from "react";
import "../styles/Crew.css";
import { data } from "../utils/data";

const Crew = () => {
  const [dot, setDot] = useState<Number>(0)
  const crewMember = (index:Number) =>{
    setDot(index)
  }
  return (
    <div className="grid-container grid-container--crew flow">
      <h1 className="numbered-title">
        <span>02</span> Meet your crew
      </h1>
      <div className="dot-indicators flex">
        <button className={`${dot === 0 && "active"}`} onClick={()=>crewMember(0)}>
          <span className="sr-only">The commander</span>
        </button>
        <button className={`${dot === 1 && "active"}`} onClick={()=>crewMember(1)}>
          <span className="sr-only">The mission specialist</span>
        </button>
        <button className={`${dot === 2 && "active"}`} onClick={()=>crewMember(2)}>
          <span className="sr-only">The pilot</span>
        </button>
        <button className={`${dot === 3 && "active"}`} onClick={()=>crewMember(3)}>
          <span className="sr-only">The crew engineer</span>
        </button>
      </div>
      {data &&
        data.crew.map((cr, index) => (
          <>
            <article key={index} className={`${index!==dot && "hide"} crew-details flow`}>
              <header className="flow flow--space-small">
                <h2 className="fs-600 ff-serif uppercase">{cr.role}</h2>
                <p className="fs-700 uppercase ff-serif">{cr.name}</p>
              </header>
              <p>{cr.bio}</p>
            </article>

            <img className={`${index!== dot && "hide"}`} src={cr.images.webp} alt={cr.name} />
          </>
        ))}
    </div>
  );
};

export default Crew;
