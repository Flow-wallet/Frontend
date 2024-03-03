import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface HeaderButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant: "primary" | "secondary" | "disabled";
}

export function HeaderButton({ ...props }: HeaderButtonProps) {
  let variant;
  switch (props.variant) {
    case "primary":
      variant =
        "h-8 px-4 rounded-md border-none bg-gold-100 text-turquoise-500 font-urbanist font-bold hover:bg-gold-200 hover:text-turquoise-700 ease-linear transition-all";
      break;
    case "secondary":
      variant =
        "h-8 px-4 rounded-md border border-gold-100 bg-transparent text-gold-100 font-urbanist font-bold hover:bg-black-20 hover:text-gold-200 hover:border-gold-200 ease-linear transition-all";
      break;
    case "disabled": 
    variant = "h-8 px-4 rounded-md border-none bg-zinc-300 text-zinc-400 font-urbanist font-bold cursor-not-allowed";
    break;

    default:
      break;
  }
  return (
    <button className={twMerge(variant)} {...props}>
      <span>{props.label}</span>
    </button>
  );
}
