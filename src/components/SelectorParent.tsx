import type { FormData } from "../context/FormContext";
import Selector from "./Selector";

interface Props {
  textArr: string[];
  selectOneOnly?: boolean;
  columns: number;
  formParameter: keyof FormData;
  srcObj?: Record<string, string>; // Fixed: Optional object with string keys and values
}

export default function SelectorParent({
  textArr,
  columns = 2,
  formParameter,
  srcObj 
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
        <Selector 
          key={text} 
          text={text} 
          formParameter={formParameter}
          {...(srcObj?.[text] && { src: srcObj[text] })} // Fixed: Conditional prop spreading
        />
      ))}
    </div>
  );
}