import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant: "primary" | "secondary" | "disabled";
  width?: string;
}

export function BaseButton(props: BaseButtonProps) {
  let btnStyle;
  switch (props.variant) {
    case "primary":
      btnStyle =
        "text-gold-100 font-medium bg-gold-500 border border-gold-600 hover:bg-gold-600 hover:border-gold-700 hover:text-gold-200 focus:bg-gold-600 focus:border-gold-700 focus:text-gold-200";
      break;
    case "secondary":
      btnStyle =
        "text-gold-100 font-medium bg-turquoise-600 border border-turquoise-700 hover:bg-turquoise-700 hover:border-gold-500 hover:text-gold-200 focus:bg-turquoise-700 focus:border-gold-500 focus:text-gold-200";
      break;
    case "disabled":
      btnStyle =
        "text-zinc-200 font-medium bg-zinc-400 border border-zinc-500 cursor-not-allowed";
      break;

    default:
      break;
  }

  return (
    <button
      disabled={props.variant === "disabled" ? true : false}
      className={twMerge(
        btnStyle,
        props.width,
        "text-sm py-2 rounded-md ease-linear transition-all outline-none"
      )}
      {...props}
    >
      {props.label}
    </button>
  );
}
