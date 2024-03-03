interface ClearInputProps {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  required: boolean;
}

export function ClearInput(props: ClearInputProps) {
  return (
    <div className="w-full justify-end flex flex-col items-start">
      <label
        className="pl-1 h-full flex items-center font-urbanist text-sm font-medium text-turquoise-600"
        htmlFor={props.id}
      >
        {props.label}:
      </label>
      <div className="w-full ">
        <input
          required={props.required ? props.required : false}
          className="w-full h-8 rounded-md bg-turquoise-300 px-2 font-urbanist text-turquoise-600 text-sm placeholder:text-turquoise-100 focus:bg-turquoise-500 border border-turquoise-500 outline-none focus:text-gold-100 focus:border-turquoise-700"
          type={props.type}
          id={props.id}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
}
