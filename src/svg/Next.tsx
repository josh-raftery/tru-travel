import { useNavigate } from "react-router-dom"

type NextProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => boolean | void
  linkTo: string
  text?: string
  width?: string
  fill?: string
  sendEmail?: () => void
}

export default function Next({
  width = "20px",
  fill = "white",
  text = "Next",
  linkTo,
  onClick,
  sendEmail
}: NextProps) {
  const navigate = useNavigate()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const result = onClick?.(e) // Run parent validation
    if (result === false || e.defaultPrevented) return // Block navigation
    if(sendEmail){
      sendEmail()
    }
    navigate(linkTo) // Navigate only if valid
  }

  return (
    <button
      onClick={handleClick}
      className="rounded-xl flex justify-center w-full h-9 p-1 m-auto gap-3 tru-primary-border tru-primary hover:opacity-50 items-center"
    >
      <p className="tru-text text-white">
        <b>{text}</b>
      </p>
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-fit"
        width={width}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
          fill={fill}
        ></path>
      </svg>
    </button>
  )
}
