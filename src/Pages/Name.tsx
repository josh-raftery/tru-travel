import { useState } from "react"
import { useForm } from "../context/FormContext"
import Title from "../components/Title"
import Next from "../svg/Next"
import Previous from "../svg/Previous"
import TooltipError from "../components/TooltipError"

export default function Name() {
  const { formData, updateForm } = useForm()
  const [touched, setTouched] = useState(false)

  const isValid = !!formData.name?.trim() && !!formData.lastName?.trim()

  const handleNext = (e: React.MouseEvent) => {
    if (!isValid) {
      e.preventDefault()
      setTouched(true)
    }
  }

  return (
    <div className="gap-5 grid m-5">
      <Title title="what's your name legend?" />
      <div className="relative w-full">
        <input
          placeholder="First name"
          value={formData.name || ""}
          onChange={e => {
            updateForm({ name: e.target.value });
            setTouched(false);
          }}
          className={`p-2 rounded w-full ${touched && !formData.name?.trim()
              ? "!border-2 !border-red-500"
              : "border border-gray-300"
            }`}
        />
        <TooltipError
          show={touched && !formData.name?.trim()}
        />
      </div>
      <div className="relative w-full">
        <input
          placeholder="Last name"
          value={formData.lastName || ""}
          onChange={e => {
            updateForm({ lastName: e.target.value });
            setTouched(false);
          }}
          className={`p-2 rounded w-full ${touched && !formData.lastName?.trim()
              ? "!border-2 !border-red-500"
              : "border border-gray-300"
            }`}
        />
        <TooltipError
          show={touched && !formData.lastName?.trim()}
        />
      </div>
      {/* Pass the click handler to block navigation */}
      <Next linkTo="/startDate" onClick={handleNext} />
      <Previous />
    </div>
  )
}
