// 11

import { useEffect, useState } from "react";
import SelectorParent from "../components/SelectorParent";
import Title from "../components/Title";
import Next from "../svg/Next";
import Previous from "../svg/Previous";

export default function Activities(){

    const textArr = [
        "Fraser Island",
        "The Whitsundays",
        "Skydiving",
        "Great Barrier Reef",
        "Nimbin",
        "Learn to Surf",
        "Kayaking",
        "Bungy Jump",
        "Rafting",
        "Daintree Rainforest",
        "Waterfalls",
        "Wildlife Experiences"
    ];

    const [columns, setColumns] = useState(2)

    useEffect(() => {
      const updateColumns = () => {
        setColumns(window.innerWidth <= 400 ? 1 : 2) // 768px is md breakpoint
      }

      updateColumns() // Set initial value
      window.addEventListener('resize', updateColumns)

      return () => window.removeEventListener('resize', updateColumns)
    }, [])
    
    return (
        <div className="gap-10 grid m-5">
          <Title title="design your dream experience" />
          <SelectorParent
            textArr={textArr}
            formParameter="activities"
            columns={columns}
            selectOneOnly={false}
          />
          <div className="gap-5 grid">
            <Next
                linkTo="/additionalNotes"
            />
            <Previous />
          </div>
        </div>
      );
}