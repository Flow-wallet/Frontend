import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode[];
  side: "left" | "right" | "both";
  variant: "primary" | "secondary" | "disabled";
  label: string;
  width?: string;
}

export function IconButton(props: IconButtonProps) {
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
        "py-1 px-2 font-urbanist text-sm rounded-md",
        btnStyle,
        props.width
      )}
      {...props}
    >
      {props.side === "left" ? (
        <div className="flex justify-between items-center ">
          {props.icon[0]}
          {props.label}
        </div>
      ) : props.side === "right" ? (
        <div className="flex justify-between items-center ">
          {props.label}
          {props.icon[0]}
        </div>
      ) : (
        <div className="flex justify-between items-center ">
          {props.icon[0]}
          {props.label}
          {props.icon[1]}
        </div>
      )}
    </button>
  );
}
