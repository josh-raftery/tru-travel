// 13

import { useForm } from "../context/FormContext"
import Title from "../components/Title";
import Next from "../svg/Next";
import Previous from "../svg/Previous";
import { useState } from "react";
import TooltipError from "../components/TooltipError";

export default function Contact() {
    const { formData, updateForm } = useForm()
    const [touched, setTouched] = useState(false)

    const isValid = !!formData.email?.trim() && !!formData.whatsapp?.trim()

    const handleNext = (e: React.MouseEvent) => {
        if (!isValid) {
            e.preventDefault()
            setTouched(true)
        }
    }

    return (
        <div className="gap-5 grid m-5 " >
            <Title title="CONTACT DETAILS." />
            <div className="relative w-full" >
                <input
                    placeholder="Email"
                    value={formData.email || ""}
                    onChange={e => {
                        updateForm({ email: e.target.value });
                        setTouched(false);
                    }}
                    className={`p-2 rounded w-full ${touched && !formData.email?.trim()
                        ? "!border-2 !border-red-500"
                        : "border border-gray-300"
                        }`}
                />
                <TooltipError
                    show={touched && !formData.email?.trim()}
                />
            </div>
            <div className="relative w-full" >
                <input
                    placeholder="WhatsApp Number"
                    value={formData.whatsapp || ""}
                    onChange={e => {
                        updateForm({ whatsapp: e.target.value });
                        setTouched(false);
                    }}
                    className={`p-2 rounded w-full ${touched && !formData.whatsapp?.trim()
                        ? "!border-2 !border-red-500"
                        : "border border-gray-300"
                        }`}
                />
                <TooltipError
                    show={touched && !formData.whatsapp?.trim()}
                />
            </div>
            <Next onClick={handleNext} linkTo="/finish" />
            <Previous />
        </div>
    )
}