import { useForm } from "../context/FormContext";
import type selectorProps from "../interfaces/selectorProps";

export default function Selector({ text, formParameter, src }: selectorProps) {
  const { formData, updateForm } = useForm();
  const value = formData[formParameter];

  const isArray = Array.isArray(value);
  const isSelected = isArray ? value.includes(text) : value === text;

  function handleClick() {
    if (isArray) {
      const newValue = isSelected
        ? value.filter((item: string) => item !== text) // remove
        : [...value, text]; // add
      updateForm({ [formParameter]: newValue });
    } else {
      const newValue = isSelected ? null : text;
      updateForm({ [formParameter]: newValue });
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`rounded-xl flex w-full h-15 p-0 m-auto overflow-hidden ${
        isSelected ? "tru-primary-border tru-primary" : "outline-solid"
      } hover:opacity-50 items-center`}
    >
      {src && <img 
    src={src} 
    alt={text} 
    className="h-full w-2/5 object-cover max-w-[100px]"
  />}
      <p className={`tru-text ${isSelected && "text-white"} flex-1 px-2`}>{text}</p>
    </button>
  );
}