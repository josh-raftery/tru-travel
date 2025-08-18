// 6

import { useState } from "react";
import Title from "../components/Title";
import Next from "../svg/Next";
import Previous from "../svg/Previous";
import Plus from "../svg/Plus";
import Minus from "../svg/Minus";

export default function People(){

    const [count,setCount] = useState(1)

    return (
        <div className="gap-10 grid m-5">
          <Title title="HOW MANY OF YOU ARE THERE?" />
          <div className="flex justify-center gap-5" >
            <button 
                onClick={() => setCount((currCount) => {
                    return currCount + 1
                })} 
                className="rounded-full w-fit outline-solid hover:opacity-50 items-center" 
            >
                <Plus/>
            </button>
            <span className="tru-text w-[100px] text-center align-middle">{count}</span>
            <button
                className="rounded-full w-fit outline-solid hover:opacity-50 items-center" 
                onClick={() => setCount((currCount) => {
                    return currCount - 1
                })} 
            >
                <Minus/>
            </button>
          </div>
          <div className="gap-5 grid">
            <Next linkTo="/startDestination" />
            <Previous />
          </div>
        </div>
    );
}