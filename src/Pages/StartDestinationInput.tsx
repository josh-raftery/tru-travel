// 7a 

import { useForm } from "../context/FormContext"
import Title from "../components/Title";
import Next from "../svg/Next";
import Previous from "../svg/Previous";
import { useState } from "react";
import TooltipError from "../components/TooltipError";

export default function StartDestinationInput() {
    const { formData, updateForm } = useForm()
    const [touched, setTouched] = useState(false)

    const isValid = !!formData.startDestinationInput?.trim()

    const handleNext = (e: React.MouseEvent) => {
        if (!isValid) {
            e.preventDefault()
            setTouched(true)
        }
    }

    return (
        <div className="gap-5 grid m-5 " >
            <Title title="Where are you starting?" />
            <div className="relative w-full">
                <textarea
                    placeholder="Destination"
                    value={formData.startDestinationInput || ""}
                    onChange={e => {
                        updateForm({ startDestinationInput: e.target.value });
                        setTouched(false);
                    }}
                    className={`p-2 rounded w-full ${touched && !formData.startDestinationInput?.trim()
                        ? "!border-2 !border-red-500"
                        : "border border-gray-300"
                        }`}
                />
                <TooltipError
                    show={touched && !formData.startDestinationInput?.trim()}
                />
            </div>
            <Next onClick={handleNext} linkTo="/endDestination" />
            <Previous />
        </div>
    )
}