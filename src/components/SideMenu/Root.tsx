import { ReactNode } from "react";

interface SideMenuRootProps {
	children: ReactNode;
}

export function SideMenuRoot(props: SideMenuRootProps) {
	return (
		<div className="h-screen w-[20%] flex flex-col gap-27 bg-turquoise-700">
			{props.children}
		</div>
	);
}
