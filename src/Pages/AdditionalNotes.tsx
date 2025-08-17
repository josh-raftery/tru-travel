// 11

import Title from "../components/Title";
import Next from "../svg/Next";
import Previous from "../svg/Previous";

export default function AdditionalNotes(){
    return (
        <div className="gap-5 grid m-5 " >
            <Title title="Is there anything else you'd like to mention"/>
            <textarea placeholder="Additional notes" />
            <Next linkTo="/contact" />
            <Previous linkTo="/activities" />
        </div>
    )
}