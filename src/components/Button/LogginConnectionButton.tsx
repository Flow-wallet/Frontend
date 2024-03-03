import { ButtonHTMLAttributes } from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

interface LoginConnectionButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "google" | "facebook" | "apple";
  label: string;
}

export function LoginConnectionButton(props: LoginConnectionButtonProps) {
  let btnIcon;
  let btnStyle;
  switch (props.variant) {
    case "google":
      btnIcon = <FaGoogle />;
      btnStyle =
        "bg-red-600 text-gold-100 hover:bg-red-700 hover:text-gold-200 outline-none border border-red-600 hover:border-red-800 focus:bg-red-700 focus:text-gold-200 focus:border-red-800";
      break;
    case "facebook":
      btnIcon = <FaFacebook />;
      btnStyle =
        "bg-indigo-600 text-gold-100 hover:bg-indigo-700 hover:text-gold-200 outline-none border border-indigo-600 hover:border-indigo-800 focus:bg-indigo-700 focus:text-gold-200 focus:border-indigo-800";
      break;
    case "apple":
      btnIcon = <FaApple />;
      btnStyle =
        "bg-zinc-600 text-gold-100 hover:bg-zinc-700 hover:text-gold-200 outline-none border border-zinc-600 hover:border-zinc-800 focus:bg-zinc-800 focus:text-gold-200 focus:border-zinc-800";
      break;

    default:
      break;
  }
  return (
    <button
      className={twMerge(
        btnStyle,
        "w-full flex text-nowrap rounded-md px-8 py-2 items-center font-medium justify-between h-10 font-urbanist transition-all ease-linear"
      )}
      {...props}
    >
      <span className="text-xl">{btnIcon}</span>
      <span className="w-full">Enter with {props.label}</span>
    </button>
  );
}
