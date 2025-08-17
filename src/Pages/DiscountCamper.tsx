// 9b

import SelectorParent from "../components/SelectorParent";
import Title from "../components/Title";
import Next from "../svg/Next";
import { useForm } from "../context/FormContext"
import Previous from "../svg/Previous";
import { useState } from "react";
import TooltipError from "../components/TooltipError";

export default function DiscountCamper() {

  const textArr = ["Yes", "No"]
  const { formData } = useForm()

  const [touched, setTouched] = useState(false)
  const isValid = formData.discountedCamper !== ""

  const handleNext = (e: React.MouseEvent) => {
    if (!isValid) {
      e.preventDefault()
      setTouched(true)
    }
  }

  return (
    <div className="gap-10 grid m-5">
      <div>
        <Title title="We can get you a discounted camper rental, interested?" />
        <TooltipError message="Please select one" show={!isValid && touched} centered={true} />
      </div>
      <SelectorParent
        textArr={textArr}
        formParameter="discountedCamper"
        columns={2}
      />
      <div className="gap-5 grid">
        <Next onClick={handleNext} linkTo="/accomodation" />
        <Previous linkTo="/transport" />
      </div>
    </div>
  );
}