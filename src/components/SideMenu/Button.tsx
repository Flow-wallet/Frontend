import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SideMenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon: ReactNode;
  variant: "primary" | "secondary" | "tertiary" | "disabled";
}

export function SideMenuButton({ ...props }: SideMenuButtonProps) {
  let variant = "";
  switch (props.variant) {
    case "primary":
      variant =
        "h-12 w-[95%] rounded-md flex items-center gap-3 px-6 font-urbanist text-lg text-gold-100 bg-turquoise-700 ease-linear transition-all hover:bg-turquoise-800 cursor-pointer border-none";
      break;
    case "secondary":
      variant =
        "h-12 w-[95%] flex items-center gap-3 px-6 font-urbanist text-lg text-gold-100 bg-turquoise-600 ease-linear transition-all hover:bg-turquoise-800 cursor-pointer border-none";
      break;
    case "tertiary":
      variant =
        "h-12 w-[95%] flex items-center gap-3 px-6 font-urbanist text-lg text-gold-100 bg-turquoise-400 ease-linear transition-all hover:bg-turquoise-800 cursor-pointer border-none";
      break;
    case "disabled":
      variant =
        "h-12 w-[95%] flex items-center gap-3 px-6 font-urbanist text-lg text-gold-100 bg-turquoise-300 ease-linear transition-all cursor-not-allowed border-none";
      break;
    default:
      break;
  }
  return (
    <button className={twMerge(variant)} {...props}>
      {props.icon}
      {props.label}
    </button>
  );
}
