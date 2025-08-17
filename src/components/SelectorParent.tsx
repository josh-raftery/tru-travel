import type { FormData } from "../context/FormContext";
import Selector from "./Selector";

interface Props {
  textArr: string[];
  selectOneOnly?: boolean; // Optional — could be inferred from FormData type
  columns: number;
  formParameter: keyof FormData;
}

export default function SelectorParent({
  textArr,
  columns = 2,
  formParameter,
}: Props) {
  const columnClass =
    {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
      5: "grid-cols-5",
      6: "grid-cols-6",
    }[columns] || "grid-cols-2";

  return (
    <div className={`gap-5 grid ${columnClass} w-full`}>
      {textArr.map((text) => (
        <Selector key={text} text={text} formParameter={formParameter} />
      ))}
    </div>
  );
}
