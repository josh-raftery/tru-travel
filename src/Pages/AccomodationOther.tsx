// 10b

import { useForm } from "../context/FormContext"
import Title from "../components/Title";
import Next from "../svg/Next";
import Previous from "../svg/Previous";
import { useState } from "react";
import TooltipError from "../components/TooltipError";

export default function AccomodationOther() {
    const { formData, updateForm } = useForm()
    const [touched, setTouched] = useState(false)

    const isValid = !!formData.accomodationOther?.trim()

    const handleNext = (e: React.MouseEvent) => {
        if (!isValid) {
            e.preventDefault()
            setTouched(true)
        }
    }

    return (
        <div className="gap-5 grid m-5 " >
            <Title title="What other kind of accomodation are you looking to stay in?" />
            <div className="relative w-full" >
                <textarea
                    placeholder="Accomodation"
                    value={formData.accomodationOther || ""}
                    onChange={e => {
                        updateForm({ accomodationOther: e.target.value });
                        setTouched(false);
                    }}
                    className={`p-2 rounded w-full ${touched && !formData.accomodationOther?.trim()
                        ? "!border-2 !border-red-500"
                        : "border border-gray-300"
                        }`}
                />
                <TooltipError
                    show={touched && !isValid}
                />
            </div>
            <Next onClick={handleNext} linkTo="/activities" />
            <Previous/>
        </div>
    )
}