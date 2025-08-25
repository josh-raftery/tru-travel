import type { FormData } from "../context/FormContext"

export default interface SelectorProps {
  text: string;
  formParameter: keyof FormData
  src?: string
}
