"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";

import {
  LayoutDashboard,
  Upload,
  History,
  Sparkles,
  Settings,
  Menu,
  X,
} from "lucide-react";

const sidebarItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Upload Resume",
    href: "/upload",
    icon: Upload,
  },
  {
    label: "Analysis History",
    href: "/history",
    icon: History,
  },
  {
    label: "Career Insights",
    href: "/insights",
    icon: Sparkles,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

const handleLogout = async () => {
  await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        window.location.href = "/";
      },
    },
  });
};

type SidebarContentProps = {
  pathname: string;
  onNavigate?: () => void;
};

const SidebarContent = ({ pathname, onNavigate }: SidebarContentProps) => (
  <>
    <nav className="space-y-2">
      <h1 className="p-3 text-2xl font-bold text-blue-700 sm:text-3xl">
        Resume AI
      </h1>
      {sidebarItems.map((item) => {
        const Icon = item.icon;
        const isActive =
          pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.label}
            href={item.href}
            onClick={onNavigate}
            className={`flex items-center gap-4 rounded-lg px-4 py-3 transition-colors ${
              isActive
                ? "bg-blue-100 text-blue-700"
                : "text-slate-700 hover:bg-blue-50"
            }`}
          >
            <Icon className="h-5 w-5 shrink-0" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>

    <button
      type="button"
      onClick={handleLogout}
      className="rounded-lg bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600"
    >
      Log Out
    </button>
  </>
);

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 lg:hidden">
        <div>
          <p className="text-lg font-bold text-blue-700">Resume AI</p>
          <p className="text-xs text-slate-500">Dashboard navigation</p>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="rounded-lg border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-50"
          aria-label="Open dashboard navigation"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-slate-900/40 lg:hidden">
          <div className="flex h-full max-w-[18rem] flex-col justify-between border-r border-slate-200 bg-white p-4 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-lg font-semibold text-slate-900">Menu</p>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-lg border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-50"
                aria-label="Close dashboard navigation"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex min-h-0 flex-1 flex-col justify-between">
              <SidebarContent
                pathname={pathname}
                onNavigate={() => setIsOpen(false)}
              />
            </div>
          </div>
        </div>
      )}

      <aside className="hidden w-64 flex-col justify-between border-r-2 border-gray-200 bg-white p-4 text-black lg:flex">
        <SidebarContent pathname={pathname} />
      </aside>
    </>
  );
};

export default Sidebar;
