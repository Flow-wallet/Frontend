import { ReactNode } from "react";

interface HeaderRootProps {
	children: ReactNode;
}

export function HeaderRoot(props: HeaderRootProps) {
	return (
		<div className="flex w-full h-20 justify-end bg-turquoise-700 px-6 items-center gap-3">
			{props.children}
		</div>
	);
}
