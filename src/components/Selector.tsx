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
      className={`rounded-xl flex w-full ${src ? 'h-15' : 'h-9'} p-0 m-auto slide-transition ${isSelected ? "selected tru-primary-border" : "outline-solid"
        } items-center`}
    >
      {src && <img
        src={src}
        alt={text}
        className="h-full w-2/5 object-cover max-w-[100px] slide-content"
      />}
      <p className={`tru-text slide-content ${isSelected && "text-white"} flex-1 px-2`}>
        {text}
      </p>
    </button>
  );
}