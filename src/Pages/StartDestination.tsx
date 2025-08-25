// 7 

import SelectorParent from "../components/SelectorParent";
import Title from "../components/Title";
import Next from "../svg/Next";
import Previous from "../svg/Previous";
import { useForm } from "../context/FormContext"
import { useState } from "react";
import TooltipError from "../components/TooltipError";

export default function StartDestination() {

  const textArr = ["Melbourne", "Sydney", "Byron Bay", "Gold Coast", "Brisbane", "Airlie Beach", "Cairns", "Other"]
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
  const selected = formData.startDestination || "";

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
        <Title title="WHERE ARE YOU STARTING?" />
        <TooltipError message="Please select one" show={!isValid && touched} centered={true} />
      </div>
      <SelectorParent
        textArr={textArr}
        formParameter="startDestination"
        columns={2}
        selectOneOnly={true}
        srcObj={srcObj}
      />
      <div className="gap-5 grid">
        <Next onClick={handleNext} linkTo={selected === 'Other' ? "/startDestinationInput" : "/endDestination"} />
        <Previous />
      </div>
    </div>
  );
}