import { ButtonHTMLAttributes, ReactNode } from "react";

interface SideMenuListItemProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon: ReactNode;
	label: string;
}

export function SideMenuListItem(props: SideMenuListItemProps) {
	return (
		<button
			type="button"
			className="h-12 w-[95%] flex items-center gap-3 px-8 font-urbanist text-lg text-gold-100 bg-turquoise-600 ease-linear transition-all hover:bg-turquoise-500 cursor-pointer border-none"
		>
			{props.icon}
			{props.label}
		</button>
	);
}
