import { ReactNode } from "react";

interface ToggleInputProps {
  required?: boolean;
  type: string;
  onClick: () => void;
  label: string;
  placeholder: string;
  icon: ReactNode[];
}

export function ToggleInput(props: ToggleInputProps) {
  return (
    <div className="w-full justify-end flex flex-col items-start">
      <label
        className="pl-1 h-full flex items-center font-urbanist text-sm font-medium text-turquoise-600"
        htmlFor="passWord"
      >
        {props.label}:
      </label>
      <div className="w-52 h-8 flex justify-end items-center rounded-md bg-gold-100 focus-within:bg-gold-200 border-gold-100 border-2 focus-within:border-gold-300 [&>*]:focus-within:bg-gold-200 transition-all ease-linear">
        <input
          required={props.required ? props.required : false}
          className="w-full rounded-l-sm bg-gold-100 px-2 font-urbanist text-turquoise-600 text-sm placeholder:text-gold-300 focus:bg-gold-200 border-none outline-none transition-all ease-linear"
          type={props.type}
          id="passWord"
          placeholder={props.placeholder}
        />
        <button
          type="button"
          onClick={props.onClick}
          className="flex items-center justify-center h-7 aspect-square rounded-r-sm bg-gold-100 text-turquoise-500 transition-all ease-linear cursor-pointer hover:bg-gold-300 hover:text-turquoise-700 hover:rounded-md outline-none"
        >
          {props.type == "password" ? props.icon[0] : props.icon[1]}
        </button>
      </div>
    </div>
  );
}
