import { SideMenu } from "../../components/SideMenu";
import { Header } from "../../components/Header";
import { PiGauge } from "react-icons/pi";
import { useState } from "react";
import { api } from "../../data/api/config";

export function DashboardPage() {
  return (
    <div className="max-h-screen max-w-screen flex">
      <SideMenu.Root>
        <SideMenu.Brand />
      </SideMenu.Root>
      <Header.Root>
        <Header.Button label="Register" variant="primary" />
        <Header.Button label="Login" variant="secondary" />
      </Header.Root>
    </div>
  );
}
