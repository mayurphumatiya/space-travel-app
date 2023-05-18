import { useState } from "react";
import "../styles/Stepper.css";
import { TiTick} from "react-icons/ti"

const Stepper = () => {
  const steps = ["Customer Info", "Contact Info", "Payment"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  return (
    <>
      <div className="steps-div">
        {steps?.map((steps, i) => (
          <div
            key={i}
            className={`single-step ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            }`}
          >
            <div className="step">{(i+1 < currentStep || complete) ? <TiTick size={24} /> : i + 1 }</div>
            <p>{steps}</p>
          </div>
        ))}
      </div>
      <button
        className="login-btn"
        onClick={() => {
          currentStep === steps.length
            ? setComplete(true)
            : setCurrentStep((prev) => prev + 1);
        }}
      >
        Next
      </button>
    </>
  );
};

export default Stepper;
