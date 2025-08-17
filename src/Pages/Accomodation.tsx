// 10

import { useForm } from "../context/FormContext";
import SelectorParent from "../components/SelectorParent";
import Title from "../components/Title";
import Next from "../svg/Next";
import Previous from "../svg/Previous";
import { useState } from "react";
import TooltipError from "../components/TooltipError";

export default function Accomodation(){

    const textArr = ["Hostels", "Hotels", "Camping", "Other"]
    const { formData } = useForm();
    const selected = formData.accomodation || [];
    
      const [touched, setTouched] = useState(false)
    
      const isValid = selected.length > 0
    
      const handleNext = (e: React.MouseEvent) => {
        if (!isValid) {
          e.preventDefault()
          setTouched(true)
        }
      }
  
    let nextLink = "/activities";
    if (selected?.includes("Hostels")){
      nextLink = "/hostels"
    } else if (selected?.includes("Other")){
      nextLink = "/accomodationOther"
    } 
    
    return (
        <div className="gap-10 grid m-5">
          <div>
            <Title title="Where would you like to stay?" />
            <TooltipError message="Please select one" show={!isValid && touched} centered={true} />
          </div>
          <SelectorParent
            formParameter="accomodation"
            textArr={textArr}
            selectOneOnly={false}
            columns={2}
          />
          <div className="gap-5 grid">
            <Next  onClick={handleNext} linkTo={nextLink} />
            <Previous linkTo="/transport" />
          </div>
        </div>
      );
}