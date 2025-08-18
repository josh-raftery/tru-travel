// 9c

import { useForm } from "../context/FormContext"
import SelectorParent from "../components/SelectorParent";
import Title from "../components/Title";
import Next from "../svg/Next";
import Previous from "../svg/Previous";
import { useState } from "react";
import TooltipError from "../components/TooltipError";

export default function DiscountBus(){

    const textArr = ["Yes","No"]

    const { formData } = useForm()
    const selected = formData.transport || [];
    
    const [touched, setTouched] = useState(false)
    const isValid = formData.discountedBus !== ""

    const handleNext = (e: React.MouseEvent) => {
      if (!isValid) {
        e.preventDefault()
        setTouched(true)
      }
    }

    let nextLink = "/accomodation";
    if (selected?.includes("Campervan")){
      nextLink = "/discountedCamper"
    }
    
    return (
        <div className="gap-10 grid m-5">
          <div>
            <Title title="We can get you a discounted bus pass, interested?" />
            <TooltipError message="Please select one" show={!isValid && touched} centered={true} />
          </div>
          <SelectorParent
            textArr={textArr}
            formParameter="discountedBus"
            columns={2}
          />
          <div className="gap-5 grid">
            <Next onClick={handleNext} linkTo={nextLink} />
            <Previous  />
          </div>
        </div>
      );
}