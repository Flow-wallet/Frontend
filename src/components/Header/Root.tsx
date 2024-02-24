import { ReactNode } from "react";

interface HeaderRootProps {
	children: ReactNode;
}

export function HeaderRoot(props: HeaderRootProps) {
	return (
		<div className="flex w-full h-27 justify-end bg-turquoise-500 px-6">
			{props.children}
		</div>
	);
}
