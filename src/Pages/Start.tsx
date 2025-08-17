// 1 

import Next from "../svg/Next";

export default function Start(){

    return (
        <div className="gap-5 grid m-5 " >
            <div>
                <h2 className="tru-text tru-header text-xl text-center" ><b>BUILD YOUR TRIP,</b></h2>
                <h2 className="tru-text tru-header text-xl text-center" ><b>GET YOUR FREE ITINERARY.</b></h2>
            </div>
            <Next linkTo="/name" text="Let's get started" />
        </div>
    )
}