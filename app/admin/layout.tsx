import React from "react";
import { TopBar } from "./components/TopBar";
import { DashboardProvider } from "./components/Provider";
import { Overlay } from "./components/OverLay";
import { Sidebar } from "./components/sidebar/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const style = {
  container: "h-screen overflow-hidden relative",
  mainContainer:
    "bg-[#25074D] flex flex-col h-screen pl-0 w-full lg:w-[calc(100%-16rem)]",
  main: "bg-gray-100 h-screen overflow-auto pb-36 pt-4 px-2 md:pb-8 md:px-4 lg:px-6 lg:rounded-tl-3xl",
};
// export default function RootLayout({
//     children,
//   }: {
//     children: React.ReactNode
//   })

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardProvider>
      <div className={style.container}>
        <div className="flex items-start">
          <Overlay />
          <Sidebar mobileOrientation="end" />
          <div className={style.mainContainer}>
            <TopBar />
            <main className={style.main}>{children}</main>
          </div>
        </div>
      </div>
    </DashboardProvider>
  );
}
