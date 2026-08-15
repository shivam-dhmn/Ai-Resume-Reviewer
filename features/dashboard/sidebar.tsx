"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Upload,
  History,
  Sparkles,
  Settings,
} from "lucide-react";

const sidebarItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Upload Resume",
    href: "/dashboard/upload",
    icon: Upload,
  },
  {
    label: "Analysis History",
    href: "/dashboard/history",
    icon: History,
  },
  {
    label: "Career Insights",
    href: "/dashboard/insights",
    icon: Sparkles,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="w-64 h-screen bg-white text-black p-4">
      <h1 className="text-3xl font-bold p-3 text-blue-700">Resume AI</h1>

     <nav className="space-y-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;

          const isActive =
            pathname === item.href ||
            pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-4 rounded-lg px-4 py-3 transition-colors ${
                isActive
                  ? "bg-blue-100 text-blue-700"
                  : "text-slate-700 hover:bg-blue-50"
              }`}
            >
              <Icon className="h-5 w-5" />

              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
