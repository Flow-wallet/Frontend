import { ButtonHTMLAttributes, ReactNode } from "react";

interface SideMenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon: ReactNode;
}

export function SideMenuButton(props: SideMenuButtonProps) {
  return (
    <button
      type="button"
      className="h-12 w-[95%] rounded-md flex items-center gap-3 px-6 font-urbanist text-lg text-gold-100 bg-turquoise-700 ease-linear transition-all hover:bg-turquoise-800 cursor-pointer border-none"
    >
      {props.icon}
      {props.label}
    </button>
  );
}
