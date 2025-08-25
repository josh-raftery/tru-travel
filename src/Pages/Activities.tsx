// 11

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
    
    return (
        <div className="gap-10 grid m-5">
          <Title title="design your dream experience" />
          <SelectorParent
            textArr={textArr}
            formParameter="activities"
            columns={2}
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