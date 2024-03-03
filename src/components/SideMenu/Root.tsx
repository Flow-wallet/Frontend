import { ReactNode } from "react";

interface SideMenuRootProps {
	children: ReactNode;
}

export function SideMenuRoot(props: SideMenuRootProps) {
	return (
		<div className="w-[20%] flex flex-col bg-turquoise-700 items-center">
			{props.children}
		</div>
	);
}
