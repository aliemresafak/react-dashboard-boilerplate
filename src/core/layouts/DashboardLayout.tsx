import CommandMenu from "@/components/CommandMenu";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";
import Sidebar from "@/core/layouts/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="grid h-screen w-full pl-[53px]">
      <Sidebar />
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4">
          <h1 className="text-xl font-semibold">Profixify</h1>
          <div className="ml-auto flex items-center gap-2">
            <LanguageSwitcher />
            <CommandMenu />
            <ThemeToggle />
          </div>
        </header>
        <main className="flex flex-1 gap-4 overflow-auto bg-muted">
          <div className="relative flex h-full min-h-[50vh] flex-col p-4 w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
