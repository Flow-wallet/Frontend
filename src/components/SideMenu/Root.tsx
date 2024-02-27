import { ReactNode } from "react";

interface SideMenuRootProps {
	children: ReactNode;
}

export function SideMenuRoot(props: SideMenuRootProps) {
	return (
		<div className="h-27 w-[20%] flex flex-col gap-27 bg-turquoise-700 items-center">
			{props.children}
		</div>
	);
}
