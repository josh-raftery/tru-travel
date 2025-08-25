// 5

import SelectorParent from "../components/SelectorParent";
import Title from "../components/Title";
import TooltipError from "../components/TooltipError";
import Next from "../svg/Next";
import Previous from "../svg/Previous";
import { useForm } from "../context/FormContext"
import { useEffect, useState } from "react";

export default function Vibe() {

  const textArr = ["Adventure", "Party", "Chilled", "Couple", "Flashpacker", "Family"]
  const srcObj ={
    Adventure: "/adventure.png",
    Party: "/party.svg",
    Chilled: "/chilled.svg",
    Flashpacker: "/flashpacker.svg",
    Couple: "/couple.png",
    Family: "/family.svg"
  }

  const [columns, setColumns] = useState(2)
    
  useEffect(() => {
    const updateColumns = () => {
      setColumns(window.innerWidth <= 400 ? 1 : 2) // 768px is md breakpoint
    }

    updateColumns() // Set initial value
    window.addEventListener('resize', updateColumns)

    return () => window.removeEventListener('resize', updateColumns)
  }, [])

  const { formData } = useForm()
  const selected = formData.vibe || [];

  const [touched, setTouched] = useState(false)

  const isValid = selected.length > 0

  const handleNext = (e: React.MouseEvent) => {
    if (!isValid) {
      e.preventDefault()
      setTouched(true)
    }
  }

  return (
    <div className="gap-10 grid m-5">
      <div>
        <Title title="WHAT'S YOUR VIBE?" />
        <TooltipError message="Please select one" show={!isValid && touched} centered={true} />
      </div>
      <SelectorParent
        textArr={textArr}
        formParameter="vibe"
        columns={columns}
        srcObj={srcObj}
      />
      <div className="gap-5 grid">
        <Next onClick={handleNext} linkTo="/people" />
        <Previous />
      </div>
    </div>
  );
}