// 9a

import { useForm } from "../context/FormContext"
import SelectorParent from "../components/SelectorParent";
import Title from "../components/Title";
import Next from "../svg/Next";
import Previous from "../svg/Previous";
import { useState } from "react";
import TooltipError from "../components/TooltipError";

export default function DiscountCar(){

    const textArr = ["Yes","No"]
    const { formData } = useForm()
    const selected = formData.transport || [];

    const [touched, setTouched] = useState(false)
    const isValid = formData.discountedCar !== ""

    const handleNext = (e: React.MouseEvent) => {
      if (!isValid) {
        e.preventDefault()
        setTouched(true)
      }
    }

    let nextLink = "/accomodation";
    if (selected?.includes("Bus")){
      nextLink = "/discountedBus"
    } else if (selected?.includes("Campervan")){
      nextLink = "/discountedCamper"
    } 
    
    return (
        <div className="gap-10 grid m-5">
          <div>
            <Title title="We can get you a discounted car rental, interested?" />
            <TooltipError message="Please select one" show={!isValid && touched} centered={true} />
          </div>
          <SelectorParent
            textArr={textArr}
            formParameter="discountedCar"
            columns={2}
          />
          <div className="gap-5 grid">
            <Next onClick={handleNext} linkTo={nextLink} />
            <Previous />
          </div>
        </div>
      );
}