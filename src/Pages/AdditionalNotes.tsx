// 11

import Title from "../components/Title";
import { useForm } from "../context/FormContext";
import Next from "../svg/Next";
import Previous from "../svg/Previous";

export default function AdditionalNotes() {
    const { formData, updateForm } = useForm()

    return (
        <div className="gap-5 grid m-5 " >
            <Title title="Is there anything else you'd like to mention" />
            <textarea
                value={formData.notes || ""}
                placeholder="Additional notes"
                onChange={e => {
                    updateForm({ notes: e.target.value });
                }}
            />
            <Next linkTo="/contact" />
            <Previous />
        </div>
    )
}