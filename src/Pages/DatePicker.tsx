import { useForm } from "../context/FormContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Next from "../svg/Next";
import Previous from "../svg/Previous";
import Title from "../components/Title";
import { useState } from "react";
import TooltipError from "../components/TooltipError";

export default function StartDatePicker() {
  const { formData, updateForm } = useForm();
  const [touched, setTouched] = useState(false)

  const isValid = !!formData.startDate

  const handleNext = (e: React.MouseEvent) => {
    if (!isValid) {
      e.preventDefault()
      setTouched(true)
    }
  }

  return (
    <div className="gap-10 grid m-5">
      <Title title="CHOOSE YOUR START DATE." />
      <div className="relative w-full">
        <DatePicker
          selected={formData.startDate ? new Date(formData.startDate) : null}
          onChange={(date: Date | null) => updateForm({ startDate: date ?? undefined })}
          // Custom input props to ensure full width and consistent styling
          customInput={
            <input 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          }
          wrapperClassName="w-full"
          calendarClassName="w-full"
          minDate={new Date()}
          placeholderText="Select a date"
          dropdownMode="select"
          showYearDropdown
          showMonthDropdown
          dateFormat="dd/MM/yyyy"
        />
        <TooltipError
          show={touched && !isValid}
        />
      </div>
      <div className="gap-5 grid">
        <Next linkTo="/tripLength" onClick={handleNext} />
        <Previous linkTo="/name" />
      </div>
    </div>
  );
}