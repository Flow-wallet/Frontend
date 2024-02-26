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
import { twMerge } from "tailwind-merge";
import { api } from "../../data/api/config";

export function DashboardPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-h-screen max-w-screen flex">
      <SideMenu.Root>
        <SideMenu.Brand />
        <div className="flex flex-col h-full w-full items-center">
          <SideMenu.Button onClick={async () => {try {
            await api.get('/')
          } catch (err) {
            console.error(err)
          }}} icon={<PiGauge size={28} />} label="Dashboard" />
          <div className="flex flex-col w-[95%]">
            <Collapsible.Root onOpenChange={setOpen}>
              <Collapsible.Trigger asChild>
                <button
                  type="button"
                  className={twMerge(
                    "flex w-full h-12 z-10 justify-between px-6 items-center rounded-md text-gold-100 font-urbanist text-lg  ease-linear transition-all hover:bg-turquoise-800 cursor-pointer border-none",
                    open ? "bg-turquoise-800" : "bg-turquoise-700"
                  )}
                >
                  <div className="flex gap-3">
                    <PiFolder size={28} />
                    <span>Folder</span>
                  </div>
                  {open ? <PiCaretUp size={20} /> : <PiCaretDown size={20} />}
                </button>
              </Collapsible.Trigger>
              <Collapsible.Content className="CollapsibleContent rounded-md items-center flex flex-col [&>*:last-child]:rounded-b-md">
                <SideMenu.ListItem
                  icon={open ? <PiCoinVertical size={28} /> : ""}
                  label={open ? "Billings" : ""}
                />
                <SideMenu.ListItem
                  icon={open ? <PiCoinVertical size={28} /> : ""}
                  label={open ? "Billings" : ""}
                />
                <SideMenu.ListItem
                  icon={open ? <PiCoinVertical size={28} /> : ""}
                  label={open ? "Billings" : ""}
                />
              </Collapsible.Content>
            </Collapsible.Root>
          </div>
        </div>
      </SideMenu.Root>
      <Header.Root>
        <a
          href="#"
          className="flex items-center gap-3 decoration-transparent text-gold-100"
        >
          <span className="font-urbanist text-xl text-gold-100">
            Pablo Albernaz
          </span>
          <Avatar.Root className="flex items-center justify-center h-13 w-13 rounded-full bg-gold-100">
            <Avatar.Image
              className="h-full w-full rounded-[inherit] object-cover"
              src="https://github.com/pabloalbrnz.png"
              alt="Pedro Duarte"
            />
            <Avatar.Fallback className="font-urbanist font-bold text-xl text-gold-500">
              PA
            </Avatar.Fallback>
          </Avatar.Root>
        </a>
      </Header.Root>
    </div>
  );
}
