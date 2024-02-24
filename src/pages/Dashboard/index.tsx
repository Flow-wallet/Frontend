import * as Collapsible from "@radix-ui/react-collapsible";
import * as Avatar from "@radix-ui/react-avatar";
import { SideMenu } from "../../components/SideMenu";
import { Header } from "../../components/Header";
import {
	PiCaretDown,
	PiCaretUp,
	PiCoinVertical,
	PiFolder,
	PiGauge,
} from "react-icons/pi";
import { useState } from "react";

export function DashboardPage() {
	const [open, setOpen] = useState(false);

	return (
		<div className="max-h-screen max-w-screen flex">
			<SideMenu.Root>
				<SideMenu.Brand />
				<div className="flex flex-col h-full w-full">
					<SideMenu.Button icon={<PiGauge size={28} />} label="Dashboard" />
					<div className="flex flex-col">
						<Collapsible.Root onOpenChange={setOpen}>
							<Collapsible.Trigger asChild>
								<button
									type="button"
									className="flex w-full h-13 z-10 justify-between px-6 items-center text-gold-100 font-urbanist text-2xl bg-turquoise-700 ease-linear transition-all hover:bg-turquoise-800 cursor-pointer border-none"
								>
									<div className="flex gap-3">
										<PiFolder size={28} />
										<span>Folder</span>
									</div>
									{open ? <PiCaretUp /> : <PiCaretDown />}
								</button>
							</Collapsible.Trigger>
							<Collapsible.Content className="CollapsibleContent">
								<SideMenu.ListItem
									icon={<PiCoinVertical size={28} />}
									label="Billings"
								/>
							</Collapsible.Content>
						</Collapsible.Root>
					</div>
				</div>
			</SideMenu.Root>
			<Header.Root>
				<a
					// biome-ignore lint/a11y/useValidAnchor: <explanation>
					href="#"
					className="flex items-center gap-3 decoration-transparent text-gold-100"
				>
					<span className="font-urbanist text-2xl text-gold-100">
						Pablo Albernaz
					</span>
					<Avatar.Root className="flex items-center justify-center h-13 w-13 rounded-full bg-gold-100">
						<Avatar.Image
							className="h-full w-full rounded-[inherit] object-cover"
							src="https://github.com/pabloalbrnz.png"
							alt="Pedro Duarte"
						/>
						<Avatar.Fallback className="font-urbanist font-bold text-2xl text-gold-500">
							PA
						</Avatar.Fallback>
					</Avatar.Root>
				</a>
			</Header.Root>
		</div>
	);
}
