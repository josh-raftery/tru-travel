// 4
import Title from "../components/Title";
import Next from "../svg/Next";
import Previous from "../svg/Previous";
import Plus from "../svg/Plus";
import Minus from "../svg/Minus";
import { useForm } from "../context/FormContext";

export default function TripLength() {
  const { formData, updateForm } = useForm();

  const count = formData.tripLength ?? 2; // fallback to 2 if not set

  const increase = () => updateForm({ tripLength: count + 1 });
  const decrease = () => {
    if (count > 1) updateForm({ tripLength: count - 1 });
  };

  return (
    <div className="gap-10 grid m-5">
      <Title title="HOW LONG IS YOUR TRIP?" />
      <div className="flex justify-center gap-5">
        <button
          onClick={increase}
          className="rounded-full w-fit outline-solid hover:opacity-50 items-center"
        >
          <Plus />
        </button>
        <span className="tru-text w-[100px] text-center align-middle">
          {`${count} week${count > 1 ? "s" : ""}`}
        </span>
        <button
          onClick={decrease}
          className="rounded-full w-fit outline-solid hover:opacity-50 items-center"
        >
          <Minus />
        </button>
      </div>
      <div className="gap-5 grid">
        <Next linkTo="/vibe" />
        <Previous />
      </div>
    </div>
  );
}
