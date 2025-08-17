// 8

import { useState } from "react";
import SelectorParent from "../components/SelectorParent";
import Title from "../components/Title";
import Next from "../svg/Next";
import Previous from "../svg/Previous";
import { useForm } from "../context/FormContext"
import TooltipError from "../components/TooltipError";

export default function EndDestination() {

  const textArr = ["Melbourne", "Sydney", "Byron Bay", "Gold Coast", "Brisbane", "Airlie Beach", "Cairns", "Other"]
  const { formData } = useForm()
  const selected = formData.endDestination || "";

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
        <Title title="Where are you Finishing?" />
        <TooltipError message="Please select one" show={!isValid && touched} centered={true} />
      </div>
      <SelectorParent
        textArr={textArr}
        formParameter="endDestination"
        columns={2}
        selectOneOnly={true}
      />
      <div className="gap-5 grid">
        <Next onClick={handleNext} linkTo={selected === 'Other' ? "/endDestinationInput" : "/transport"} />
        <Previous linkTo="/startDestination" />
      </div>
    </div>
  );
}