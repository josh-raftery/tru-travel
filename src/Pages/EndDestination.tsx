// 8

import { useEffect, useState } from "react";
import SelectorParent from "../components/SelectorParent";
import Title from "../components/Title";
import Next from "../svg/Next";
import Previous from "../svg/Previous";
import { useForm } from "../context/FormContext"
import TooltipError from "../components/TooltipError";

export default function EndDestination() {

  const textArr = ["Melbourne", "Sydney", "Byron Bay", "Gold Coast", "Brisbane", "Airlie Beach", "Cairns", "Other"]
  const [columns, setColumns] = useState(2)
    
    useEffect(() => {
      const updateColumns = () => {
        setColumns(window.innerWidth <= 400 ? 1 : 2) // 768px is md breakpoint
      }
  
      updateColumns() // Set initial value
      window.addEventListener('resize', updateColumns)
  
      return () => window.removeEventListener('resize', updateColumns)
    }, [])

  const srcObj ={
    Melbourne: "/melbs.png",
    Sydney: "/sydney.jpg",
    Brisbane: "/brisbane.jpg",
    ["Byron Bay"]: "/byron.jpg",
    ["Gold Coast"]: "/gold_coast.jpg",
    ["Airlie Beach"]: "/airlie.jpg",
    Cairns: "/cairns.jpg",
    Other: "/somehere_else.jpg"
  }
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
        columns={columns}
        selectOneOnly={true}
        srcObj={srcObj}
      />
      <div className="gap-5 grid">
        <Next onClick={handleNext} linkTo={selected === 'Other' ? "/endDestinationInput" : "/transport"} />
        <Previous />
      </div>
    </div>
  );
}