import { useForm } from "../context/FormContext";
import type selectorProps from "../interfaces/selectorProps";

export default function Selector({ text, formParameter }: selectorProps) {
  const { formData, updateForm } = useForm();
  const value = formData[formParameter];

  console.log(formParameter, ' <---------------')
  console.log(value, ' value <-----')

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
      className={`rounded-xl flex justify-center w-full h-9 p-1 m-auto gap-3 ${
        isSelected ? "tru-primary-border tru-primary" : "outline-solid"
      } hover:opacity-50 items-center`}
    >
      <p className={`tru-text ${isSelected && "text-white"}`}>{text}</p>
    </button>
  );
}
