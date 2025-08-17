interface TooltipErrorProps {
  message?: string;
  show: boolean;
  centered?: boolean;
}

export default function TooltipError({ 
  message = "This field is required", 
  show, 
  centered = false 
}: TooltipErrorProps) {
  return (
    <div
      className={`absolute left-0 mt-1 px-3 py-1 text-sm text-white bg-red-600 rounded shadow-lg transition-opacity duration-200 z-10 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      } ${centered ? "left-1/2 transform -translate-x-1/2" : ""}`}
    >
      {message}
      <div 
        className={`absolute -top-1 ${
          centered ? "left-1/2 transform -translate-x-1/2" : "left-3"
        } w-2 h-2 bg-red-600 rotate-45`}
      ></div>
    </div>
  );
}