import SelectorParent from "../components/SelectorParent";
import Title from "../components/Title";
import Next from "../svg/Next";
import Previous from "../svg/Previous";
import { useForm } from "../context/FormContext"
import TooltipError from "../components/TooltipError";
import { useState } from "react";

export default function StartDate() {
  const textArr = ["I'm flexible", "I know my start date", "I just want a quote"];
  const { formData } = useForm()
  const selected = formData.startDateType || "";

  const [touched, setTouched] = useState(false)
  
  const isValid = selected !== ""

  const handleNext = (e: React.MouseEvent) => {
    if (!isValid) {
      e.preventDefault()
      setTouched(true)
    }
  }

  return (
    <div className="gap-10 grid m-5">
      <div>
        <Title title="when do you want to start?" />
        <TooltipError message="Please select one" show={!isValid && touched} centered={true}/>
      </div>
      <SelectorParent
        textArr={textArr}
        selectOneOnly={true}
        columns={1}
        formParameter="startDateType"
      />
      <div className="gap-5 grid">
        <Next onClick={handleNext} linkTo={selected === "I know my start date" ? "/datePicker" : "/tripLength"} />
        <Previous />
      </div>
    </div>
  );
}
