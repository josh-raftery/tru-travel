// 8a 

import { useForm } from "../context/FormContext"
import Title from "../components/Title";
import Next from "../svg/Next";
import Previous from "../svg/Previous";
import { useState } from "react";
import TooltipError from "../components/TooltipError";

export default function EndDestinationInput() {
    const { formData, updateForm } = useForm()

    const [touched, setTouched] = useState(false)

    const isValid = !!formData.endDestinationInput?.trim()

    const handleNext = (e: React.MouseEvent) => {
        if (!isValid) {
            e.preventDefault()
            setTouched(true)
        }
    }

    return (
        <div className="gap-5 grid m-5 " >
            <Title title="Where are you finishing?" />
            <div className="relative w-full">
                <textarea
                    placeholder="Destination"
                    value={formData.endDestinationInput || ""}
                    onChange={e => {
                        updateForm({ endDestinationInput: e.target.value });
                        setTouched(false);
                    }}
                    className={`p-2 rounded w-full ${touched && !formData.endDestinationInput?.trim()
                        ? "!border-2 !border-red-500"
                        : "border border-gray-300"
                        }`}
                />
                <TooltipError
                    show={touched && !formData.endDestinationInput?.trim()}
                />
            </div>
            <Next onClick={handleNext} linkTo="/transport" />
            <Previous />
        </div>
    )
}