// 10 a

import { useForm } from "../context/FormContext";
import SelectorParent from "../components/SelectorParent";
import Title from "../components/Title";
import Next from "../svg/Next";
import Previous from "../svg/Previous";
import { useState } from "react";
import TooltipError from "../components/TooltipError";

export default function Hostels(){

    const textArr = ["Private Rooms","Budget Dorms (8-16 people)","Mid-Range Dorms (4-8 people)", "Female only Dorms"]
    const { formData } = useForm();
    const selected = formData.accomodation || "";
    const hostel = formData.hostel  || []
    
    const [touched, setTouched] = useState(false)
  
    const isValid = hostel.length > 0
  
    const handleNext = (e: React.MouseEvent) => {
      if (!isValid) {
        e.preventDefault()
        setTouched(true)
      }
    }

    let nextLink = "/activities";
    if (selected?.includes("Other")){
      nextLink = "/accomodationOther"
    }
    
    return (
        <div className="gap-10 grid m-5">
          <div>
            <Title title="What size dorms?" />
            <TooltipError message="Please select one" show={!isValid && touched} centered={true} />
          </div>
          <SelectorParent
            textArr={textArr}
            formParameter="hostel"
            columns={1}
            selectOneOnly={false}
          />
          <div className="gap-5 grid">
            <Next onClick={handleNext} linkTo={nextLink} />
            <Previous linkTo="/accomodation" />
          </div>
        </div>
      );
}
