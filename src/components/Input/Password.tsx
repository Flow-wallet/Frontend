import { PiEyeFill, PiEyeSlashFill } from "react-icons/pi";

interface PasswordInputProps {
  required?: boolean;
  type: string;
  onClick: () => void;
  label: string;
  placeholder: string;
  id: string;
}

export function PasswordInput(props: PasswordInputProps) {
  return (
    <div className="w-full justify-end flex flex-col items-start">
      <label
        className="pl-1 h-full flex items-center font-urbanist text-sm font-medium text-turquoise-600"
        htmlFor={props.id}
      >
        {props.label}:
      </label>
      <div className="w-full h-8 pr-0.5 flex justify-end items-center rounded-md bg-turquoise-300 focus-within:bg-turquoise-500 border-turquoise-500 border focus-within:border-turquoise-700 transition-all ease-linear">
        <input
          required={props.required ? props.required : false}
          className="w-full h-8 rounded-l-sm px-2 bg-transparent font-urbanist text-turquoise-600 text-sm placeholder:text-turquoise-100 outline-none"
          type={props.type}
          id={props.id}
          placeholder={props.placeholder}
        />
        <button
          type="button"
          onClick={props.onClick}
          className="flex items-center justify-center h-7 aspect-square rounded-md bg-turquoise-700 text-gold-400 transition-all ease-linear cursor-pointer hover:bg-gold-300 hover:border-gold-500 hover:text-turquoise-700 outline-none border border-gold-300 focus:border-gold-500 focus:bg-gold-300 focus:text-turquoise-700"
        >
          {props.type == "password" ? <PiEyeSlashFill /> : <PiEyeFill />}
        </button>
      </div>
    </div>
  );
}
