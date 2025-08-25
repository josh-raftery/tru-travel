// 9

import SelectorParent from "../components/SelectorParent";
import Title from "../components/Title";
import Next from "../svg/Next";
import Previous from "../svg/Previous";
import { useForm } from "../context/FormContext";
import { useState } from "react";
import TooltipError from "../components/TooltipError";

export default function Transport() {
  const textArr = ["Bus", "Rent a Car", "Campervan", "Own Transport"];
  const srcObj ={
    Bus: "/Greyhound bus design.zip - 15.svg",
    ["Rent a Car"]: "/car_rental.svg",
    Campervan: "/camper.svg",
    ["Own Transport"]: "/other_tansport.svg",
  }

  const { formData } = useForm();
  const selected = formData.transport || [];

  const [touched, setTouched] = useState(false)

  const isValid = selected.length > 0

  const handleNext = (e: React.MouseEvent) => {
    if (!isValid) {
      e.preventDefault()
      setTouched(true)
    }
  }

  let nextLink = "/accomodation";
  if (selected?.includes("Rent a Car")) {
    nextLink = "/discountedCar"
  } else if (selected?.includes("Bus")) {
    nextLink = "/discountedBus"
  } else if (selected?.includes("Campervan")) {
    nextLink = "/discountedCamper"
  }

  return (
    <div className="gap-10 grid m-5">
      <div>
        <Title title="How do you like to travel?" />
        <TooltipError message="Please select one" show={!isValid && touched} centered={true} />
      </div>
      <SelectorParent
        textArr={textArr}
        formParameter="transport"
        columns={1}
        selectOneOnly={false}
        srcObj={srcObj}
      />
      <div className="gap-5 grid">
        <Next onClick={handleNext} linkTo={nextLink} />
        <Previous />
      </div>
    </div>
  );
}
