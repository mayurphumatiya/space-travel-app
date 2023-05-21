import "../styles/Stepper.css";
import { TiTick} from "react-icons/ti";

interface StepperProps{
  currentStep:number;
}

const Stepper = (props:StepperProps) => {
  const steps = ["Customer Info", "Contact Info", "Payment"];

  return (
    <>
      <div className="steps-div">
        {steps?.map((steps, i) => (
          <div
            key={i}
            className={`single-step ${props.currentStep === i + 1 && "active"} ${
              (i + 1 < props.currentStep) && "complete"
            }`}
          >
            <div className="step">{(i+1 < props.currentStep) ? <TiTick size={24} /> : i + 1 }</div>
            <p>{steps}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stepper;
